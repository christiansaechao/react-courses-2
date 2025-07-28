import { useEffect } from "react";
import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
  retryCondition: (error) => {
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      axiosRetry.isRetryableError(error) ||
      axiosRetry.isTimeoutError(error)
    );
  },
});

const ApiCall = () => {
  const getUserData = async () => {
    const abortController = new AbortController();
    try {
      const { data } = await axios.get("https://randomuser.me/api/", {
        signal: abortController.signal,
      });

      if (data.results.length <= 0) {
        throw new Error("No user data found");
      }

      setUser(response.data.results[0]);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Fetch cancelled");
      } else {
        console.error("Error fetching user:", err.message);
      }
    }
  };

  useEffect(getUserData, []);

  return <div>ApiCall</div>;
};

export default ApiCall;
