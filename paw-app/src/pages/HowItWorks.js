
import "./CssPages/AboutUs.css";
import Dog from '../path/Dog.png';

function HowItWorksPage() {
  return (
    <section>
      {/* <h1>How Pawsible Works</h1> */}
      <div className='main-component'>
        <h1 className="MainText">Find the Favorite Park for Your best Friend</h1>
        <img className="DogPic" src={Dog} width="40%" height="40%" />
        <hr className="lineBreak"/> 
        <p className="Info">Want to find a park that is perfect for your dog that even they will 
        think its the best place in the world, That's exactly what Pawsible was made to do.
          <br className="break"/>
          <br></br>
          A healthy pup is a happy pup and one feature that we offer is an up to date review system that 
          allows pet lovers to rate their visit to the park that they were just at. In the review you can put the quality of the park, 
          how clean it is, how big the population size is, and a star rating that will process in our 
          algorithm to recommend parks with better reviews.
          <br className="break"/>
          <br></br>
          Additionally we understand that not every dog is pet friendly or acts as calm around others so we have a system built to monitor 
          parks and the amount of dogs that are at the park. This system is updated hourly so you can know the exact number of felines so 
          you don't have to worry about other dogs bothering you or your four legged friend.
          <br className="break"/>
          <br></br>
          Finally we have a feature that requires you to create and login to an account that lets you favorite a park you have 
          previously visited to make it easier to see on your map.
          <br className="break"/>
          <br></br>
          {/* Extra filler to make the page more built */}
          The good news is you don’t have to choose just one. 
          A very popular solution is adding surfacing elements throughout 
          the park in only certain high-use areas such as around agility equipment and 
          at the entrance of the park. Using a combination of grass and other surfacing materials is an economical 
          way to protect your investment.  
          <br className="break"/>
          <br></br>
          A final note, it is important to remember, no matter the combination of surfacing you choose, to keep the patrons and users’ 
          comfort in mind while selecting. Many surfaces like turf, kennel tiles, sand and gravel can get hot in the sun.
          If your dog park receives quite a bit of sun throughout the day, 
          consider adding shade and water features to keep your park goers cool and happy, and coming back for more.
          <br className="break"/>
          <br></br>
        </p>
      </div>
    </section>
  );
}

export default HowItWorksPage;