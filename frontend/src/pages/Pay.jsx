import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Pay = () => {
  const key="pk_test_51KZ6YKBh011QI563PYzNyoZpkY4W2Cqd1UQMgYNMAyLbI3ZkXTczBCdBXSh5gEkqCHm83pONX27ftuC7hWtvkwbJ00SWZVfyGC"
  const backendURL=process.env.REACT_APP_BACKEND_URL
  const [getStripeToken,setStripeToken]=useState(null);
  const navigate=useNavigate();
  const onToken=(token)=>{
    setStripeToken(token);
  }

  useEffect(()=>{
    const makeRequest=async()=>{
      try{
        const res=await axios.post("http://localhost:4000/backend/payment",{
          tokenId:getStripeToken.id,
          amount:getStripeToken.amount
        });
        console.log(res.data);
        navigate("/pay_success");
      }catch(err){
        console.log(err);
      }
    };
    getStripeToken && makeRequest();
  },[getStripeToken])

  return (
    <div>
      <StripeCheckout name="Patrimonio Shop" 
      image="https://patrimoniohome.com/wp-content/uploads/elementor/thumbs/logo-1-1-qcyigd9bn0z7fh10n6i8xm45gpkxcdezolyl7kunym.png"
      billingAddress
      shippingAddress
      description="Your total is $20"
      amount={2000}
      token={onToken}
      stripeKey={key}>
        <button>
          Pay
        </button>
      </StripeCheckout>
    </div>
  )
}

export default Pay
