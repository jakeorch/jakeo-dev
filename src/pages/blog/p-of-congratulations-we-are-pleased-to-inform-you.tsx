import CommonHead from "@/components/CommonHead";
import Callout from "@/components/Callout";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faRotateRight,
  faArrowLeft,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Post3() {
  return (
    <>
      {/* head */}
      <CommonHead>
        <title>P("Congratulations! We Are Pleased to Inform You...")</title>
        <meta
          property="og:title"
          content={`P("Congratulations! We Are Pleased to Inform You...")`}
        />
        <meta
          property="og:description"
          content={`"Congratulations" is the single greatest word to begin an email. For a graduating high school student, it's immensely more exciting. You deserve not only to be accepted into a university, but also to be simply congratulated for your efforts. To relieve some anxiety...`}
        />
        <meta name="theme-color" content="#83b5d3" />
        <meta
          property="og:image"
          content="https://jakeo.dev/images/p-of-congratulations-we-are-pleased-to-inform-you/thumbnail.png"
        />
        <meta
          name="twitter:image:src"
          content="https://jakeo.dev/images/p-of-congratulations-we-are-pleased-to-inform-you/thumbnail.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
      </CommonHead>

      {/* post */}
      <h1 className="sub1title pb-0">
        P("Congratulations! We Are Pleased to Inform You...")
      </h1>

      <div className="postDatesDiv">
        <h2>
          <FontAwesomeIcon
            icon={faCalendarDay}
            className="mr-1.5"
            aria-hidden
          />
          Posted June 17, 2024
        </h2>
        <h2>
          <FontAwesomeIcon
            icon={faRotateRight}
            className="mr-1.5"
            aria-hidden
          />
          Edited February 15, 2025
        </h2>
      </div>

      <div className="postThumbImgDiv mt-6">
        <Image
          src={require("../../../public/images/p-of-congratulations-we-are-pleased-to-inform-you/thumbnail.png")}
          alt="A warped fake college acceptance email"
          className="postThumbImg"
          placeholder="blur"
        />
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <div className="lg:block flex-[0.3] xl:flex-[0] xl:w-0 lg:sticky top-6 self-start">
          <p className="lg:hidden block sub2title mb-0">Sections</p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2 lg:block lg:bg-gray-200/70 lg:rounded-lg lg:p-4 lg:ml-10 mb-16 lg:mt-6 lg:-mr-10 xl:-mr-64">
            <p className="hidden lg:block sub2title mt-0 pt-0">Sections</p>
            <a href="#background" className="text link block">
              Background
            </a>
            <a href="#disclaimer" className="text link block lg:mt-5">
              Disclaimer
            </a>
            <a href="#a-mix-of-colleges" className="text link block lg:mt-5">
              A Mix of Colleges
            </a>
            <a href="#only-reaches" className="text link block lg:mt-5">
              Only Reaches
            </a>
            <a href="#only-ivy-league" className="text link block lg:mt-5">
              Only Ivy League
            </a>
            <a href="#only-ucs" className="text link block lg:mt-5">
              Only UCs
            </a>
            <a href="#only-safeties" className="text link block lg:mt-5">
              Only Safeties
            </a>
            <a href="#only-targets" className="text link block lg:mt-5">
              Only Targets
            </a>
            {/* <a href="#interesting-graphs" className="text link block lg:mt-5">
              Interesting Graphs
            </a> */}
            <a href="#personalized-chances" className="text link block lg:mt-5">
              Personalized Chances
            </a>
          </div>
        </div>

        <div className="flex-1">
          <p className="text">
            "Congratulations" is the single greatest word to begin an email. For
            a graduating high school student, it's immensely more exciting. You
            deserve not only to be accepted into a university, but also to be
            simply congratulated for your efforts. To relieve some anxiety about
            your future, I'll offer a different, more optimistic perspective on
            the chances of seeing that word in an email from the colleges you
            hope to be admitted to.
          </p>

          <h3 className="sub1title" id="background">
            Background
          </h3>
          <p className="text">
            I'll let our overlord known as the College Board define{" "}
            <a
              href="https://counselors.collegeboard.org/college-application/how-many"
              target="_blank"
              className="link"
            >
              the categories
            </a>{" "}
            in which I will group the types of colleges: the easily-attainable
            "safeties," the usually-achieveable "matches/targets," and the
            you'll-never-be-accepted-no-matter-how-hard-you-try "reaches."
          </p>
          <p className="text">
            I'll define the acceptance rates of each category by these
            percentages that I just made up, and then to simplify this simple
            blog post even more, I'll take the average percentage within each
            range to use in the calculations:
          </p>
          <ul className="text list-disc">
            <li>Safety: 75 to 100% → 87.5%</li>
            <li>Target: 35 to 74.9% → 55%</li>
            <li>Reach: 0 to 34.9% → 17.5%</li>
          </ul>
          <Callout>
            {`It's important to note that these percentages are based on absolutely
            nothing. Scroll down to the `}
            <a href="#disclaimer" className="link">
              Disclaimer
            </a>
            {` section for more about how inaccurate this blog post actually is.`}
          </Callout>
          {/* <p className="text">
            I won't go into an explanation of the specifics of the math I'm
            using, mainly because I'm not good at that, but I'll explain some of
            the basic things that I'm going to be using often.
          </p> */}
          <p className="sub2title">"And" probability</p>
          <p className="text">
            P() represents the probability of whatever is within the
            parenthesis. If we want to find the probability of two independent
            events happening at the same time, we multiply the probabilities.
          </p>
          <p className="text">
            P(rolling a two on a six-sided die AND rolling a four on another
            six-sided die)
          </p>
          <p className="text">= (1/6) * (1/6)</p>
          <p className="text">= (1/6)^2</p>
          <p className="text">= 2.78% chance</p>
          <p className="sub2title">Using probability for college acceptances</p>
          <p className="text">
            We can use "and" probability to find the chance of being accepted
            into multiple colleges, assuming the events are independent.
          </p>
          <p className="text">
            The acceptance rate of Purdue University is around 53%, New York
            University is around 12%, and Georgia State University is around
            67%.
          </p>
          <p className="text">
            P(accepted into Purdue University AND accepted into New York
            University AND accepted into Georgia State University)
          </p>
          <p className="text">= 0.53 * 0.12 * 0.67</p>
          <p className="text">= 4.26% chance</p>
          <p className="sub2title">Using probability for college rejections</p>
          <p className="text">
            If we want to find the probability of being rejected from all three
            universities, subtract the acceptance rate from 1 to find the
            rejection rate, then multiply them together.
          </p>
          <p className="text">
            P(rejected from Purdue University AND rejected from New York
            University AND rejected from Georgia State University)
          </p>
          <p className="text">= (1 - 0.53) * (1 - 0.12) * (1 - 0.67)</p>
          <p className="text">= 13.6% chance</p>
          <p className="sub2title">Using probability for the bare minimum</p>
          <p className="text">
            If we want to find the probability of being accepted into at least
            one of the three universities, subtract the probability of being
            rejected from all three from 1.
            {/* I won't go into detail about how or why this works because this isn't a math-focused blog post, so you'll just have to trust me... */}
          </p>
          <p className="text">
            P(accepted into at least one of the following: Purdue University,
            New York University, or Georgia State University)
          </p>
          <p className="text">
            = 1 - P(rejected from Purdue University AND rejected from New York
            University AND rejected from Georgia State University)
          </p>
          <p className="text">= 1 - ((1 - 0.53) * (1 - 0.12) * (1 - 0.67))</p>
          <p className="text">= 86.4% chance</p>
          <p className="subtext">
            We can't use "or" probability here by simply adding the
            probabilities because that would give a number greater than 1, which
            doesn't make sense in this case. There's probably a real reason for
            this, but I don't know or care about that...
          </p>
          <p className="sub2title">Using the binomial distribution</p>
          <p className="text">
            If we want to find the probability of being accepted into at least
            two, at least three, or at least any number of colleges, we can use
            the binomial. Instead of showing the entire calculation, I'll just
            use the binomcdf() function on my favorite and only graphing
            calculator, the TI-84 Plus.
          </p>
          <p className="text">
            A limitation of the binomial is that there must be only one
            probability. We can use it to find the probability of getting
            accepted into at least two of five colleges all with the same
            acceptance rate, for example, but not when the acceptance rates of
            those colleges differ. If you want a thorough explanation of the
            binomial,{" "}
            <a
              href="https://ap-stats.notion.site/Binomial-Distribution-ac323e691fd1477e9145d13277bd6338"
              target="_blank"
              className="link"
            >
              this is a good one
            </a>
            .
          </p>
          <p className="text">
            P(accepted into at least two of five colleges that all have an
            acceptance rate of around 40%)
          </p>
          <p className="text">= 1 - binomcdf(5, 0.40, 1)</p>
          <p className="text">= 66.3% chance</p>

          <p className="sub1title" id="disclaimer">
            Disclaimer
          </p>
          <p className="text">
            Although luck is a significant factor, acceptances are not entirely
            random chance as these calculations may suggest. These calculations
            only generalize overall acceptance rates of colleges into three
            basic categories, which isn't truly enough information to tell you
            about a person's chances of acceptance. You shouldn't listen to this
            light-hearted blog post or me at all for serious advice about
            college.
          </p>

          <h3 className="sub1title" id="a-mix-of-colleges">
            A Mix of Colleges: 2 safeties, 4 targets, and 2 reaches
          </h3>
          <p className="text">
            The College Board and some other organizations recommend that half
            of the colleges you apply to are in the "target" category, and the
            other half is split between the "safety" and "reach" categories. For
            this section and the rest of this post, I will use eight colleges in
            the examples. The binomial can't be used here because of this mix of
            acceptance rates.
          </p>
          <p className="sub3title">
            P(rejected from all 2 safeties, 4 targets, and 2 reaches)
          </p>
          <p className="text">= (1 - 0.875)^2 * (1 - 0.55)^4 * (1 - 0.175)^2</p>
          <p className="text">
            = <b>0.04%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 1 of 2 safeties, 4 targets, or 2 reaches)
          </p>
          <p className="text">
            = 1 - ((1 - 0.875)^2 * (1 - 0.55)^4 * (1 - 0.175)^2)
          </p>
          <p className="text">
            = <b>99.96%</b>
          </p>
          <p className="sub3title">
            P(accepted into all 2 safeties, 4 targets, and 2 reaches)
          </p>
          <p className="text">= (0.875)^2 * (0.55)^4 * (0.175)^2</p>
          <p className="text">
            = <b>0.21%</b>
          </p>

          <h3 className="sub1title" id="only-reaches">
            Only Reaches
          </h3>
          <p className="text">
            If you hate safeties and only want to apply to colleges that aren't
            easily within your range, then this is your section.
          </p>
          <p className="sub3title">P(rejected from all 8 reaches)</p>
          <p className="text">= (1 - 0.175)^8</p>
          <p className="text">
            = <b>21.5%</b>
          </p>
          <p className="sub3title">P(accepted into at least 1 of 8 reaches)</p>
          <p className="text">= 1 - binomcdf(8, 0.175, 0)</p>
          <p className="text">
            = <b>78.5%</b>
          </p>
          <p className="sub3title">P(accepted into at least 2 of 8 reaches)</p>
          <p className="text">= 1 - binomcdf(8, 0.175, 1)</p>
          <p className="text">
            = <b>42.1%</b>
          </p>
          <p className="sub3title">P(accepted into at least 3 of 8 reaches)</p>
          <p className="text">= 1 - binomcdf(8, 0.175, 2)</p>
          <p className="text">
            = <b>15.1%</b>
          </p>
          <p className="sub3title">P(accepted into at least 4 of 8 reaches)</p>
          <p className="text">= 1 - binomcdf(8, 0.175, 3)</p>
          <p className="text">
            = <b>3.61%</b>
          </p>
          <p className="sub3title">P(accepted into at least 5 of 8 reaches)</p>
          <p className="text">= 1 - binomcdf(8, 0.175, 4)</p>
          <p className="text">
            = <b>0.57%</b>
          </p>
          <p className="sub3title">P(accepted into at least 6 of 8 reaches)</p>
          <p className="text">= 1 - binomcdf(8, 0.175, 5)</p>
          <p className="text">
            = <b>0.06%</b>
          </p>
          <p className="sub3title">P(accepted into at least 7 of 8 reaches)</p>
          <p className="text">= 1 - binomcdf(8, 0.175, 6)</p>
          <p className="text">
            = <b>0.003%</b>
          </p>
          <p className="sub3title">P(accepted into all 8 reaches)</p>
          <p className="text">= 0.175^8</p>
          <p className="text">
            = <b>0.00009%</b>
          </p>

          <h3 className="sub1title" id="only-ivy-league">
            Only Ivy League
          </h3>
          <p className="text">
            The Ivy League is a group of schools that are notoriously difficult
            to be accepted into. The average acceptance rate of an Ivy League
            school is extremely low: around 4.5%.
          </p>
          <p className="sub3title">
            P(rejected from all 8 Ivy League universities)
          </p>
          <p className="text">= (1 - 0.045)^8</p>
          <p className="text">
            = <b>69.2%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 1 of 8 Ivy League universities)
          </p>
          <p className="text">= 1 - binomcdf(8, 0.045, 0)</p>
          <p className="text">
            = <b>30.8%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 2 of 8 Ivy League universities)
          </p>
          <p className="text">= 1 - binomcdf(8, 0.045, 1)</p>
          <p className="text">
            = <b>4.73%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 3 of 8 Ivy League universities)
          </p>
          <p className="text">= 1 - binomcdf(8, 0.045, 2)</p>
          <p className="text">
            = <b>0.43%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 4 of 8 Ivy League universities)
          </p>
          <p className="text">= 1 - binomcdf(8, 0.045, 3)</p>
          <p className="text">
            = <b>0.02%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 5 of 8 Ivy League universities)
          </p>
          <p className="text">= 1 - binomcdf(8, 0.045, 4)</p>
          <p className="text">
            = <b>0.0009%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 6 of 8 Ivy League universities)
          </p>
          <p className="text">= 1 - binomcdf(8, 0.045, 5)</p>
          <p className="text">
            = <b>0.00002%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 7 of 8 Ivy League universities)
          </p>
          <p className="text">= 1 - binomcdf(8, 0.045, 6)</p>
          <p className="text">
            = <b>0.0000003%</b>
          </p>
          <p className="sub3title">
            P(accepted into all 8 Ivy League universities)
          </p>
          <p className="text">= 0.045^8</p>
          <p className="text">
            = <b>0.000000002%</b>
          </p>

          <h3 className="sub1title" id="only-ucs">
            Only UCs
          </h3>
          <p className="text">
            The University of California system offers nine undergraduate
            universities at various acceptance rates. Unfortunately, the
            binomial can't be used here either because of this. I will use the
            acceptance rates of each school{" "}
            <a
              href="https://blog.collegevine.com/uc-schools-acceptance-rates#accept"
              target="_blank"
              className="link"
            >
              provided by College Vine
            </a>
            .
          </p>
          <p className="sub3title">P(rejected from all 9 UCs)</p>
          <p className="text">
            = (1 - 0.89) * (1 - 0.69) * (1 - 0.47) * (1 - 0.37) * (1 - 0.26) *
            (1 - 0.24) * (1 - 0.21) * (1 - 0.11) * (1 - 0.09)
          </p>
          <p className="text">
            = <b>0.41%</b>
          </p>
          <p className="sub3title">P(accepted into at least 1 of 9 UCs)</p>
          <p className="text">
            = 1 - ((1 - 0.89) * (1 - 0.69) * (1 - 0.47) * (1 - 0.37) * (1 -
            0.26) * (1 - 0.24) * (1 - 0.21) * (1 - 0.11) * (1 - 0.09))
          </p>
          <p className="text">
            = <b>99.6%</b>
          </p>
          <p className="sub3title">P(accepted into all 9 UCs)</p>
          <p className="text">
            = 0.89 * 0.69 * 0.47 * 0.37 * 0.26 * 0.24 * 0.21 * 0.11 * 0.09
          </p>
          <p className="text">
            = <b>0.001%</b>
          </p>

          <p className="sub2title">
            Only the top four UCs (by acceptance rate)
          </p>
          <p className="text">
            Often, some students only apply to the UCs that are the most
            difficult to be accepted into. The top half of the UCs includes Los
            Angeles, Berkeley, Irvine, and San Diego.
          </p>
          <p className="sub3title">P(rejected from all of the top four UCs)</p>
          <p className="text">
            = (1 - 0.24) * (1 - 0.21) * (1 - 0.11) * (1 - 0.09)
          </p>
          <p className="text">
            = <b>48.6%</b>
          </p>
          <p className="sub3title">
            P(accepted into at least 1 of the top four UCs)
          </p>
          <p className="text">
            = 1 - ((1 - 0.24) * (1 - 0.21) * (1 - 0.11) * (1 - 0.09))
          </p>
          <p className="text">
            = <b>51.4%</b>
          </p>
          <p className="sub3title">P(accepted into all of the top four UCs)</p>
          <p className="text">= 0.24 * 0.21 * 0.11 * 0.09</p>
          <p className="text">
            = <b>0.05%</b>
          </p>

          <h3 className="sub1title" id="only-safeties">
            Only Safeties
          </h3>
          <p className="text">
            What if you want to guarantee your admission into any college, no
            matter the acceptance rate?
          </p>
          <p className="sub3title">P(rejected from all 8 safeties)</p>
          <p className="text">= (1 - 0.875)^8</p>
          <p className="text">
            = <b>0.000006%</b>
          </p>
          <p className="sub3title">P(accepted into at least 1 of 8 safeties)</p>
          <p className="text">= 1 - binomcdf(8, 0.875, 0)</p>
          <p className="text">
            = <b>99.99999%</b>
          </p>
          <p className="sub3title">P(accepted into at least 2 of 8 safeties)</p>
          <p className="text">= 1 - binomcdf(8, 0.875, 1)</p>
          <p className="text">
            = <b>99.9997%</b>
          </p>
          <p className="sub3title">P(accepted into at least 3 of 8 safeties)</p>
          <p className="text">= 1 - binomcdf(8, 0.875, 2)</p>
          <p className="text">
            = <b>99.99%</b>
          </p>
          <p className="sub3title">P(accepted into at least 4 of 8 safeties)</p>
          <p className="text">= 1 - binomcdf(8, 0.875, 3)</p>
          <p className="text">
            = <b>99.9%</b>
          </p>
          <p className="sub3title">P(accepted into at least 5 of 8 safeties)</p>
          <p className="text">= 1 - binomcdf(8, 0.875, 4)</p>
          <p className="text">
            = <b>98.9%</b>
          </p>
          <p className="sub3title">P(accepted into at least 6 of 8 safeties)</p>
          <p className="text">= 1 - binomcdf(8, 0.875, 5)</p>
          <p className="text">
            = <b>93.3%</b>
          </p>
          <p className="sub3title">P(accepted into at least 7 of 8 safeties)</p>
          <p className="text">= 1 - binomcdf(8, 0.875, 6)</p>
          <p className="text">
            = <b>73.6%</b>
          </p>
          <p className="sub3title">P(accepted into all 8 safeties)</p>
          <p className="text">= 0.875^8</p>
          <p className="text">
            = <b>34.4%</b>
          </p>

          <h3 className="sub1title" id="only-targets">
            Only Targets
          </h3>
          <p className="text">
            Maybe there are a few schools that you want to go to that you
            believe are right within your reach.
          </p>
          <p className="sub3title">P(rejected from all 8 targets)</p>
          <p className="text">= (1 - 0.55)^8</p>
          <p className="text">
            = <b>0.17%</b>
          </p>
          <p className="sub3title">P(accepted into at least 1 of 8 targets)</p>
          <p className="text">= 1 - binomcdf(8, 0.55, 0)</p>
          <p className="text">
            = <b>99.83%</b>
          </p>
          <p className="sub3title">P(accepted into at least 2 of 8 targets)</p>
          <p className="text">= 1 - binomcdf(8, 0.55, 1)</p>
          <p className="text">
            = <b>98.2%</b>
          </p>
          <p className="sub3title">P(accepted into at least 3 of 8 targets)</p>
          <p className="text">= 1 - binomcdf(8, 0.55, 2)</p>
          <p className="text">
            = <b>91.2%</b>
          </p>
          <p className="sub3title">P(accepted into at least 4 of 8 targets)</p>
          <p className="text">= 1 - binomcdf(8, 0.55, 3)</p>
          <p className="text">
            = <b>74.0%</b>
          </p>
          <p className="sub3title">P(accepted into at least 5 of 8 targets)</p>
          <p className="text">= 1 - binomcdf(8, 0.55, 4)</p>
          <p className="text">
            = <b>47.7%</b>
          </p>
          <p className="sub3title">P(accepted into at least 6 of 8 targets)</p>
          <p className="text">= 1 - binomcdf(8, 0.55, 5)</p>
          <p className="text">
            = <b>22.0%</b>
          </p>
          <p className="sub3title">P(accepted into at least 7 of 8 targets)</p>
          <p className="text">= 1 - binomcdf(8, 0.55, 6)</p>
          <p className="text">
            = <b>6.32%</b>
          </p>
          <p className="sub3title">P(accepted into all 8 targets)</p>
          <p className="text">= 0.55^8</p>
          <p className="text">
            = <b>0.84%</b>
          </p>

          {/* <h3 className="sub1title" id="interesting-graphs">
            Interesting Graphs
          </h3>
          <div className="mb-3">
            <div className="relative h-[36rem]">
              <p className="subtext not-italic text-center absolute left-0 vertical-rl h-full m-0">
                probability of acceptance into at least one college (%)
              </p>
              <iframe
                src="https://www.desmos.com/calculator/gzbr4bwjnc?embed" // https://www.desmos.com/calculator/oclz29spwo?embed
                className="absolute h-full border-2 border-gray-300 rounded-lg left-6 w-[calc(100%-(1.5rem))]"
              ></iframe>
            </div>
            <p className="subtext not-italic text-center ml-6">
              total number of colleges applied to
            </p>
          </div>
          <p className="subtext">Purple: all safeties</p>
          <p className="subtext">
            Blue: 3/4 safeties, 1/8 targets, 1/8 reaches
          </p>
          <p className="subtext">
            Cyan: 1/2 safeties, 1/4 targets, 1/4 reaches
          </p>
          <p className="subtext">
            Green: 1/4 safeties, 1/2 targets, 1/4 reaches
          </p>
          <p className="subtext">
            Yellow: 1/4 safeties, 1/4 targets, 1/2 reaches
          </p>
          <p className="subtext">
            Orange: 1/8 safeties, 1/8 targets, 3/4 reaches
          </p>
          <p className="subtext">Red: all reaches</p>
          <p className="text mt-6">
            Example: If you apply to 6 colleges with approximately 1/4 safeties,
            1/2 targets, and 1/4 reaches (green), then there's approximately a
            99.7% chance of getting accepted into at least one of them.
          </p>
          <p className="text">
            You could also take a subset of the colleges you apply to: if 4 of
            the colleges you apply to are reaches (red), then there's
            approximately a 53.7% chance of getting into at least one of those
            reaches.
          </p> */}

          <h3 className="sub1title" id="personalized-chances">
            Personalized Chances
          </h3>
          <p className="text">
            Not every college has the exact acceptance rates of 17.5%, 55%, or
            87.5%. For more personalized chances, you should use my Python
            program. Enter the acceptance rates of each college that you hope to
            be admitted into, and it will give you the probability of being
            accepted into all, one, or none of the colleges.
          </p>
          <p className="text">
            <a
              href="https://github.com/jakeo-dev/college-probabilities"
              target="_blank"
              className="link"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-1" aria-hidden />
              College probabilities on GitHub
            </a>
          </p>
          <p className="text">
            You should also check out{" "}
            <a
              href="https://plannter.jakeo.dev"
              target="_blank"
              className="link"
            >
              <FontAwesomeIcon icon={faSeedling} className="mr-1" aria-hidden />
              Plannter
            </a>
            , my website that lets you plan courses, keep track of
            extracurriculars, prepare for college applications, and more.
          </p>

          <div className="text-left mt-16">
            <Link href="/blog" className="block text-xl link">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="mr-2"
                aria-hidden
              />
              Read more posts
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
