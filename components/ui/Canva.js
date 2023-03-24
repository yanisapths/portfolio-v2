import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Canva() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingTop: "56.2500%",
        paddingBottom: "48px",
        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
        marginTop: "1.6em",
        marginBottom: "0.9em",
        overflow: "hidden",
        borderRadius: "8px",
        willChange: "transform",
      }}
    >
      <iframe
        loading="lazy"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          border: "none",
          padding: "0",
          margin: "0",
        }}
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFeEu4Z5TQ&#x2F;view?embed"
        allowfullscreen="allowfullscreen"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}

export default Canva;
