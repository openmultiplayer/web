import Image from "next/image";

export default function Custom404() {
  return (
    <section className="measure-wide center">
      <h1 className="tc">404 - Page Not Found</h1>

      <Image
        src="//assets.open.mp/assets/images/assets/404.jpg"
        width={1280}
        height={720}
      />
    </section>
  );
}
