import Image from "next/image";
import photo from "../../../public/photo.jpg"

export default function Home() {
  return (
      <div>
        <h1>Hello next.js</h1>
        <Image src={photo} alt="photo"/>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1NMFA0r7B3hAwwpLS8yvcUKyA5XMwdiG2g&s" alt="qwret" width={600} height={600}/>
      </div>
  );
}
