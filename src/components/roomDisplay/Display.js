import { BiObjectsHorizontalCenter } from "react-icons/bi";
import hotelRoom1 from "../../assets/images/hotelRoom1.webp";
import hotelRoom2 from "../../assets/images/hotelRoom2.jpg";
import hotelRoom3 from "../../assets/images/hotelRoom3.png";
import hotelRoom4 from "../../assets/images/hotelRoom4.jpg";

import "./roomDisplay.css";

function Display() {
  return (
    <div className="roomDisplayContainer">
      <figure>
        <img
          loading="lazy"
          src={hotelRoom1}
          alt="light hotel room width a beautifull view of the mountains"
        />
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae
          porttitor elit. Morbi scelerisque tristique neque vitae tincidunt.
          Integer euismod est sit amet turpis semper imperdiet. Aliquam at nulla
          neque. Mauris sagittis velit a suscipit feugiat. Quisque iaculis
          laoreet velit. Vivamus justo purus, vulputate eget interdum venenatis,
          hendrerit vitae felis.
        </figcaption>
      </figure>
      <figure>
        <img
          loading="lazy"
          src={hotelRoom2}
          alt="light hotel room width a beautifull view of the mountains"
        />
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien
          enim, maximus a posuere a, pretium a massa. Curabitur nec ullamcorper
          libero. Suspendisse pulvinar felis non ullamcorper lobortis. Donec
          maximus pellentesque nisi, eu viverra massa pulvinar et. Phasellus id
          lacinia neque. Donec non nunc turpis. Praesent bibendum accumsan
          nulla. Quisque a elementum arcu, nec mollis nibh. Donec egestas nisi
          iaculis faucibus pulvinar. Aliquam finibus est lorem, malesuada
          interdum sapien consectetur at.
        </figcaption>
      </figure>
      <figure>
        <img
          loading="lazy"
          src={hotelRoom3}
          alt="light hotel room width a beautifull view of the mountains"
        />
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ex
          in magna suscipit molestie non luctus nulla. In feugiat faucibus ipsum
          vel rutrum. Aliquam quis dui sapien. Curabitur nisl leo, malesuada
          aliquet ex id, pulvinar rutrum orci. Ut fermentum nisl vel orci
          finibus pretium. Suspendisse mattis eget enim ac interdum. Curabitur
          condimentum, libero vitae tincidunt semper, magna enim tristique
          magna, sit amet vehicula sem est nec ligula. Pellentesque ornare
          euismod rhoncus. Curabitur posuere volutpat fermentum.
        </figcaption>
      </figure>
      <figure>
        <img
          loading="lazy"
          src={hotelRoom4}
          alt="light hotel room width a beautifull view of the mountains"
        />
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in magna
          vitae metus tempor malesuada. Suspendisse varius metus in augue
          imperdiet, ut scelerisque tortor facilisis. Sed sollicitudin finibus
          aliquet. Vestibulum venenatis ultrices risus, eu semper turpis
          porttitor sed. Pellentesque luctus augue in laoreet viverra. Praesent
          sollicitudin dapibus metus vel lobortis. Aliquam egestas lacus non
          dolor euismod rhoncus. Proin eu mollis neque.
        </figcaption>
      </figure>
    </div>
  );
}

export default Display;
