import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IVideo } from "../../types/IVideo";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PTTu7Bdb1iZIk3yCfcyMRpGtPkSWHIF771pzpgsfyW7lk9xeA8pWUOaBdBWYhSibyC9u3Ag0fuoHkJdJSN2gx2J00MKTUlDvn"
);

const CheckoutForm: React.FC<{ amount: number; onSuccess: () => void }> = ({
  amount,
  onSuccess,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      const response = await fetch(
        "http://localhost:3001/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount }),
        }
      );

      const paymentIntent = await response.json();

      if (response.ok) {
        const { error: stripeError, paymentIntent: stripePaymentIntent } =
          await stripe.confirmCardPayment(paymentIntent.clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement)!,
            },
          });

        if (stripeError) {
          setError(stripeError.message ?? "An unknown error occurred");
          setProcessing(false);
          return;
        }

        setSucceeded(true);
        setProcessing(false);
        onSuccess();
      } else {
        setError(
          "An error occurred while processing your payment. Please try again."
        );
        setProcessing(false);
      }
    } catch (error) {
      setError(
        "An error occurred while processing your payment. Please try again."
      );
      setProcessing(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledCardElement />
      <StyledButton disabled={processing || succeeded} type="submit">
        {processing ? "Processing…" : "구매하기"}
      </StyledButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {succeeded && (
        <SuccessMessage>결제가 성공적으로 완료되었습니다!</SuccessMessage>
      )}
    </Form>
  );
};

const VideoPurchase: React.FC = () => {
  const location = useLocation();
  const video = location.state?.video as IVideo;

  const [uploaderProfileImage, setUploaderProfileImage] = useState<
    string | null
  >(null);
  const [downloadLink, setDownloadLink] = useState<string | null>(null); 

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData: any[] = JSON.parse(storedUserData);
      const currentUser = userData.find(
        (user) => user.username === video.username
      );
      if (currentUser) {
        setUploaderProfileImage(currentUser.twitterImage);
      }
    }
  }, [video.username]);

  const { register, handleSubmit } = useForm<IVideo>({
    defaultValues: {
      title: video.title,
      explanation: video.explanation,
      price: video.price,
    },
  });

  const handleDownloadWithWatermark = () => {
    if (video.videoFile instanceof Blob) {
      const videoUrl = URL.createObjectURL(video.videoFile);
      const videoElement = document.createElement("video");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      videoElement.src = videoUrl;
      videoElement.preload = "metadata"; 
      videoElement.addEventListener("loadedmetadata", () => {
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;

        if (ctx) {
          ctx.drawImage(videoElement, 0, 0);

          
          ctx.font = "24px Arial";
          ctx.fillStyle = "rgba(255, 0, 0, 0.8)"; 
         
          ctx.textAlign = "center";
          ctx.fillText("voyager", canvas.width / 2, canvas.height - 50); 

         
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `${video.title}_watermarked.mp4`; 
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url); 
            } else {
              console.error("Failed to create blob.");
              alert("다운로드 링크 생성 실패.");
            }
          }, "video/mp4");
        } else {
          console.error("Failed to get 2d context for canvas.");
          alert("Canvas 컨텍스트를 가져오는 데 실패했습니다.");
        }
      });

     
      videoElement.load();
    }
  };

  const handleDownload = () => {
    if (downloadLink) {
      window.open(downloadLink, "_blank");
    }
  };

  const handlePaymentSuccess = () => {
    if (video.videoFile instanceof Blob) {
      const url = URL.createObjectURL(video.videoFile);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${video.title}.mp4`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <VideoContainer>
        <VideoDiv>
          <Div>
            <PurchaseDiv>
              <ExplanationLi1>
                <Videoh1>동영상 구매</Videoh1>
              </ExplanationLi1>
              <DivVideo>
                {video.videoFile instanceof Blob && (
                  <VideoThumbnail
                    src={URL.createObjectURL(video.videoFile)}
                    controls
                    controlsList="nodownload"
                  />
                )}
              </DivVideo>
              <VidesoDiv>
                {uploaderProfileImage && (
                  <UserImage src={uploaderProfileImage} alt="User" />
                )}
                <Videoss>
                  <VideoH3>{video.title}</VideoH3>
                  <VideoA>{video.username}</VideoA>
                  <VideoP>{video.explanation}</VideoP>
                </Videoss>
              </VidesoDiv>
            </PurchaseDiv>
            <ExplanationDiv>
              <ExplanationUl>
                <ExplanationLi3>
                  <ExplanationP>워터마크 있는 채로</ExplanationP>
                  <ExplanationButton onClick={handleDownloadWithWatermark}>
                    무료 다운로드
                  </ExplanationButton>
                </ExplanationLi3>
                <ExplanationLi2>
                  <ExplanationP>
                    <ColoredText>구매 혜택:</ColoredText> 워터마크 제거, 고화질
                    영상
                  </ExplanationP>
                </ExplanationLi2>
                <ExplanationLi3>
                <CheckoutForm
                    amount={video.price}
                    onSuccess={handlePaymentSuccess}
                  />
                  {downloadLink && (
                    <StyledButton onClick={handleDownload}>
                      구매 완료 후 다운로드
                    </StyledButton>
                  )}
                </ExplanationLi3>
                <ExplanationLi4>
                  <ExplanationP>{video.price}₩</ExplanationP>
                </ExplanationLi4>
              </ExplanationUl>
            </ExplanationDiv>
          </Div>
        </VideoDiv>
      </VideoContainer>
    </Elements>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 2vw auto;
`;

const StyledCardElement = styled(CardElement)`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  
`;

const StyledButton = styled.button`
  background-color: #907ae7;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1vw;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
  font-size:1vw;
`;

const SuccessMessage = styled.div`
  color: green;
  margin-top: 20px;
  font-size:1vw;
`;

const VideoDiv = styled.div`
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`;

const VideoContainer = styled.div`
  background-color: #202124;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  text-align: center;
  position: relative;
  padding-bottom: 50px;
`;

const Videoh1 = styled.h1`
  text-align: left;
  font-size: 1.7vw;
  font-weight: 700;
  color: #fff;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    text-align: center;
    text-align: center;
  }
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
  }
`;

const PurchaseDiv = styled.div`
  width: 45%;

  @media screen and (max-width: 768px) {
    width: auto;
    height: 60vh
    margin-bottom: 60px;
  }
`;

const ExplanationDiv = styled.div`
  width: 38%;
  border: 1px solid #00000012;
  font-weight: 500;
  box-shadow: 2px 2px 2px #b2b2b2;
  line-height: 24px;
  border-radius: 1rem;
  background: #fff;
  margin-top: 161px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const DivVideo = styled.div`
  width: 92%;
  display: block;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    position: relative;
    width: 40%;
    margin: 0 auto;
  }
`;

const VideoThumbnail = styled.video`
  width: 100%;
  border-radius: 1rem;
  cursor: pointer;
`;

const VideoA = styled.a`
  font-size: 0.7vw;
  color: #c2c2c2;
`;

const VideoH3 = styled.h3`
  font-size: 1vw;
  margin-top: 12px;
  margin-bottom: 0px;
  color: #fff;
`;

const VideoP = styled.p`
  font-size: 0.8vw;
  margin-top: 15px;
  color: #c2c2c2;
  
  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`;

const UserImage = styled.img`
  width: 3vw;
  height: 3vw;
  margin: 15px auto;
  border-radius: 50%;
`;

const Videoss = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: left;
  justify-content: space-between;
  margin: 0 auto;
`;

const VidesoDiv = styled.div`
  display: flex;
  width: 100%;
  justify - content: normal;
  padding-top: 5px;
  
  @media screen and (max-width: 768px) {
    width: 40%;
    margin: 0 auto;
  }
`;

const ExplanationUl = styled.ul`
  margin:20px 0;
`;

const ExplanationLi1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0px;
  }
`;

const ExplanationLi2 = styled.li`
  list-style-type: none;
  padding: 30px 20px 15px 20px;
  display: flex;
  font-size: 1vw;
  justify-content: space-between;
  margin-bottom: 82px;

  @media screen and (max-width: 768px) {
    padding: 0px 20px 30px 20px;
    margin-bottom: 0px;
  }
`;

const ExplanationLi3 = styled.li`
  list-style-type: none;
  padding: 20px 20px 0px 20px;
  display: flex;
  font-size: 1.2vw;
  justify-content: space-between;
`;

const ExplanationLi4 = styled.li`
  list-style-type: none;
  padding: 20px 20px 0px 20px;
  display: flex;
  font-size: 1.2vw;
  justify-content: space-between;
  float: right;
`;

const ExplanationButton = styled.button`
  border-radius: 1rem;
  border: 1px solid #907ae7;
  background: #907ae7;
  cursor: pointer;
  padding: 12px;
  color: #fff;
  box-shadow: 2px 2px 2px #b2b2b2;
  font-size: 1vw;
  font-weight: 500;
  height: 0%;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const ExplanationP = styled.p`
  @media screen and (max-width: 768px) {
    font-size: 1vw;
  }
`;

const ColoredText = styled.span`
  color: #907ae7;
  font-weight: 600;
`;

export default VideoPurchase;
