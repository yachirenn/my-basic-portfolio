import { useState, useMemo } from "react";

const MAP: Record<string, string> = {
  react: "/tech/react.svg",
  typescript: "/tech/typescript.svg",
  javascript: "/tech/javascript.svg",
  vite: "/tech/vite.svg",
  tailwind: "/tech/tailwindcss.svg",
  tailwindcss: "/tech/tailwindcss.svg",
  firebase: "/tech/firebase.svg",
  cloudinary: "/tech/cloudinary.svg",
  node: "/tech/nodejs.svg",
  nodejs: "/tech/nodejs.svg",
  express: "/tech/express.svg",
  mongodb: "/tech/mongodb.svg",
  fastify: "/tech/fastify.svg",
  jwt: "/tech/jwt.svg",
  zustand: "/tech/zustand.svg",
  framer: "/tech/framer.svg",
  "framer motion": "/tech/framer.svg",
};

const FALLBACK_DATA_URI =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
       <circle cx='12' cy='12' r='10' fill='%239ca3af'/>
     </svg>`
  );

type Props = {
  name: string;
  size?: number; 
  className?: string;
  title?: string; 
  srcOverride?: string; 
};

export default function TechIcon({
  name,
  size = 18,
  className = "",
  title,
  srcOverride,
}: Props) {
  const key = String(name).toLowerCase();
  const [errored, setErrored] = useState(false);

  const src = useMemo(() => {
    if (srcOverride) return srcOverride;
    return MAP[key] || MAP[key.split(" ")[0]];
  }, [key, srcOverride]);

  const label = title || name;

  if (!src || errored) {
    return (
      <img
        src={FALLBACK_DATA_URI}
        width={size}
        height={size}
        alt={label}
        title={label}
        className={className}
        loading="lazy"
        decoding="async"
      />
    );
    }

  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={label}
      title={label}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
    />
  );
}