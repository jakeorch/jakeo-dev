import CommonHead from "../../components/CommonHead";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Blog2() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>The JakeO.dev Portfolio Wrapped 2023</title>
        <meta
          property="og:title"
          content="The JakeO.dev Portfolio Wrapped 2023"
        />
        <meta
          property="og:description"
          content="Wraps, recaps, and replays aren't just for music streaming services. I can look back on 2023 too, but..."
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://jakeo.dev/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png"
        />
        <meta
          name="twitter:image:src"
          content="https://jakeo.dev/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </CommonHead>

      {/* header */}
      <Header />

      {/* post */}
      <h1 className="sub1title mt-0">The JakeO.dev Portfolio Wrapped 2023</h1>

      <div className="postThumbImgDiv">
        <Image
          src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/thumbnail.png")}
          alt="Screenshots from the websites of the JakeO.dev portfolio wrapped in a bunny"
          className="postThumbImg"
          placeholder="blur"
        />
      </div>

      <div className="postDatesDiv">
        <h2>
          <FontAwesomeIcon icon={faCalendarDay} className="mr-1.5" />
          Posted December 16, 2023
        </h2>
        <h2>
          <FontAwesomeIcon icon={faRotateRight} className="mr-1.5" />
          Edited April 14, 2024
        </h2>
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:block flex-[0.3] lg:sticky top-0 self-start">
          <p className="lg:hidden block sub2title mb-0">Sections</p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 lg:block lg:border-l-2 border-gray-300 lg:py-3 lg:pl-8 lg:ml-10 mb-16 lg:mt-16">
            <p className="hidden lg:block sub2title mt-0">Sections</p>
            <a href="#plannter" className="text link block">
              Plannter
            </a>
            <a href="#cifra" className="text link block lg:mt-5">
              Cifra
            </a>
            <a href="#yearn" className="text link block lg:mt-5">
              Yearn
            </a>
            <a href="#decorate-a-tree" className="text link block lg:mt-5">
              Decorate a Tree
            </a>
            <a href="#jakeo-dev" className="text link block lg:mt-5">
              JakeO.dev
            </a>
          </div>
        </div>

        <div className="flex-1 mt-8">
          <p className="text">
            Wraps, recaps, and replays aren't just for music streaming services.
            I can look back on 2023 too, but with a focus on the thing I know
            best: my websites. I've constantly added, updated, and removed
            various features from my websites since I began this portfolio with
            Jorch.xyz as the domain in mid-2020. I'll look back on some of the
            biggest changes I've made to my websites throughout the last 12
            months.
          </p>
          <p className="text">
            All iterations of my websites can be seen on my{" "}
            <a
              href="https://github.com/jakeo-dev"
              target="_blank"
              className="link"
            >
              GitHub
            </a>{" "}
            profile.
          </p>

          {/* plannter */}
          <h3 className="sub1title" id="plannter">
            Plannter
          </h3>

          <p className="sub3title mt-0">January 2023</p>
          <p className="text">
            Introduced in late January 2023, Plannter lets students track and
            plan their courses, extracurricular activities, tests, and essays.
            It initially only tracked courses and activities, and it only
            provided a calculation for the difficulty of each grade level.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-early-jan-2023.png")}
              alt="A screenshot of Plannter in early January 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="text">
            On release one week later, the design was made more intuitive, along
            with the addition of a tests section and the now-removed grade level
            percent difficulty calculation, which calculated the percentage of
            advanced classes out of total classes per grade level.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-jan-2023.png")}
              alt="A screenshot of Plannter in January 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">February 2023</p>
          <p className="text">
            In February, a dark mode, a graduation countdown, and the ability to
            add grades for individual courses were all added.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-feb-2023.png")}
              alt="A screenshot of Plannter in February 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">June and July 2023</p>
          <p className="text">
            In June and July, the ability to calculate unweighted and weighted
            GPA cumulatively and by grade level was added. The overall design
            was also slightly improved, most notably the dark mode.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-jul-2023.png")}
              alt="A screenshot of Plannter in July 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">August 2023</p>
          <p className="text">
            A cumulative course difficulty calculation, an extracurricular
            strength calculation, and an essays section were all added in
            August, along with a few other minor features and improvements.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/plannter-aug-2023.png")}
              alt="A screenshot of Plannter in August 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          {/* cifra */}
          <h3 className="sub1title" id="cifra">
            Cifra
          </h3>

          <p className="sub3title mt-0">February 2023</p>
          <p className="text">
            Cifra was introduced in February 2023 as "Word Phone Number
            Generator." It lets users generate vanity phone numbers from their
            own phone numbers which correspond to the letters and numbers on the
            telephone keypad of the E.161 standard.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/cifra-feb-2023.png")}
              alt="A screenshot of Cifra in February 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">March 2023</p>
          <p className="text">
            The ability to save your favorite numbers for later was added in
            March.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/cifra-mar-2023.png")}
              alt="A screenshot of Cifra in March 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">July 2023</p>
          <p className="text">
            An official name was finally given to the website in July, along
            with an improved design to show more numbers at once. There were
            also vast improvements to the generation; it now checks if a letter
            combination has already been attempted, and prevents the same number
            from appearing twice.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/cifra-nov-2023.png")}
              alt="A screenshot of Cifra in July 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          {/* yearn */}
          <h3 className="sub1title" id="yearn">
            Yearn
          </h3>

          <p className="sub3title mt-0">January 2023</p>
          <p className="text">
            Introduced as Whim List in November 2022, the website's name was
            changed simply to Yearn in January. Users can add gifts that they
            yearn for and attach links, prices, and other attributes to them.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/yearn-jan-2023.png")}
              alt="A screenshot of Yearn in January 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">February 2023</p>
          <p className="text">The design was slightly improved in February.</p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/yearn-feb-2023.png")}
              alt="A screenshot of Yearn in February 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">October and November 2023</p>
          <p className="text">
            Yearn's design was improved upon again in October. The abilities to
            change the color of gift items and move them around within the list
            were both added in November.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/yearn-nov-2023.png")}
              alt="A screenshot of Yearn in November 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          {/* decorate a tree */}
          <h3 className="sub1title" id="decorate-a-tree">
            Decorate a Tree
          </h3>

          <p className="sub3title mt-0">January 2023</p>
          <p className="text">
            At the beginning of 2023, Decorate a Tree was still sporting its
            update from December of 2022, with many new decor, and most notably
            a selector to choose a specific decoration item.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/tree-jan-2023.png")}
              alt="A screenshot of Decorate a Tree in January 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">December 2023</p>
          <p className="text">
            In December, the website was updated with new ornaments, presents,
            and toppers. More abstract designs replaced the literal
            Christmas-related objects that appeared in many ornament designs.
            Similar to the decor selector added the previous year, a tree and
            garland selector were added. The size of decor could now also be
            changed.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/tree-dec-2023.png")}
              alt="A screenshot of Decorate a Tree in Deceember 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>
          <p className="text">
            Below are some examples of the previous designs compared to the new
            abstract designs.
          </p>
          <div className="flex gap-x-4">
            <div className="postImgDiv mt-0">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-yellow-old.png")}
                alt="Old yellow ornament"
                className="postImg max-w-[8rem]"
                placeholder="blur"
              />
              <p className="subtext">Old yellow ornament</p>
            </div>
            <div className="postImgDiv mt-0">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-yellow-new.png")}
                alt="New yellow ornament"
                className="postImg max-w-[8rem]"
                placeholder="blur"
              />
              <p className="subtext">New yellow ornament</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="postImgDiv mt-0">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-green-old.png")}
                alt="Old green ornament"
                className="postImg max-w-[8rem]"
                placeholder="blur"
              />
              <p className="subtext">Old green ornament</p>
            </div>
            <div className="postImgDiv mt-0">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-green-new.png")}
                alt="New green ornament"
                className="postImg max-w-[8rem]"
                placeholder="blur"
              />
              <p className="subtext">New green ornament</p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="postImgDiv mt-0">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-cyan-old.png")}
                alt="Old cyan ornament"
                className="postImg max-w-[8rem]"
                placeholder="blur"
              />
              <p className="subtext">Old cyan ornament</p>
            </div>
            <div className="postImgDiv mt-0">
              <Image
                src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/ornament-cyan-new.png")}
                alt="New cyan ornament"
                className="postImg max-w-[8rem]"
                placeholder="blur"
              />
              <p className="subtext">New cyan ornament</p>
            </div>
          </div>

          {/* jakeo.dev */}
          <h3 className="sub1title" id="jakeo-dev">
            JakeO.dev
          </h3>

          <p className="sub3title mt-0">January 2023</p>
          <p className="text">
            This design in January 2023 features colorful social buttons, a
            solid blue-gray bunny (compared to the newer gradient one), a subtle
            background gradient, and some of my older projects like Emoticon
            Generator and Rick Roll Roulette.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/main-site-jan-2023.png")}
              alt="A screenshot of JakeO.dev in January 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">June 2023</p>
          <p className="text">
            This iteration featured the first blog post on the website, "AP
            World History: A History," though incorrectly capitalized. It also
            reorganized the projects, putting only the three most recent ones on
            the home page, and then another page to view all of them. The
            gradient bunny made its debut here, along with an improved header
            including more rounded corners. There was also an easter egg that
            changed the subtext by clicking the dot in the website title.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/main-site-jun-2023.png")}
              alt="A screenshot of JakeO.dev in June 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">August and September 2023</p>
          <p className="text">
            In August and September, the website's lights were turned on with a
            new light theme. A new Featured Videos section was added. The header
            was majorly changed. The title became a link to the home page, the
            bunny could change its color when clicked, and the social buttons
            were replaced with links to pages showing all Projects, Videos, and
            Posts. The social buttons were instead put in two places: next to
            the About Me section and in a footer.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/main-site-sep-2023.png")}
              alt="A screenshot of JakeO.dev in September 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <p className="sub3title mt-0">October 2023</p>
          <p className="text">
            This iteration has been in effect since October, and the current
            website at the time of writing still resembles this design. Most of
            the sections were removed from their confining boxes. The header was
            modified the most, no longer being a persistent oval stuck to the
            top of the screen. The social buttons were once again moved to be in
            their own section below the About Me.
          </p>
          <div className="postImgDiv">
            <Image
              src={require("../../../public/images/the-jakeo-dev-portfolio-wrapped-2023/main-site-oct-2023.png")}
              alt="A screenshot of JakeO.dev in October 2023"
              className="postImg"
              placeholder="blur"
            />
          </div>

          <div className="text-left mt-16">
            <Link href="/blog" className="block text-xl link">
              Read more posts like this one
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
