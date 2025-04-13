import srcImg from "../src/image.png";

export const Imgdis = () => {
  return (
    <div>
      <h2>Image from Public Folder:</h2>
      <img src="image.png" alt="Public Folder" width="300" />

      <h2>Image from Src Folder:</h2>
      <img src={srcImg} alt="Src Folder" width="300" />
    </div>
  );
};
