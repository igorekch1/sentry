import React from "react";

export default function ErrorComponent() {
  const handle = () => {
    throw new Error("Sentry error");
  };

  return <button onClick={handle}>Break the world</button>;
}
