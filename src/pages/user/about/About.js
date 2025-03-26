import about_image from '../../../../public/images/about/about-1.png';

export default function About() {
  return (
    <>
      <header className="header_about">
        <div className="container">
          <div className="header_image">
            <img src={about_image}></img>
          </div>
        </div>
      </header >
    </>
  );
}
