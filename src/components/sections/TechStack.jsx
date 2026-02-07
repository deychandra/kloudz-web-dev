import SectionHeading from "../ui/SectionHeading";
import Kotlin from "../../assets/images/icon/kotlin.png";
import Github from "../../assets/images/icon/github.png";
import Swift from "../../assets/images/icon/swift.png";
import Php from "../../assets/images/icon/php.png";
import Cloud from "../../assets/images/icon/cloud.png";

import Azure from "../../assets/images/icon/azure.png";
import Next from "../../assets/images/icon/next.png";
import Shopify from "../../assets/images/icon/shopify.png";
import Angular from "../../assets/images/icon/angular.png";
import Nodejs from "../../assets/images/icon/nodejs.png";
import Go from "../../assets/images/icon/go.png";
import SqlServer from "../../assets/images/icon/sqlserver.png";
import Sass from "../../assets/images/icon/sass.png";
import Gatsby from "../../assets/images/icon/gatsby.png";



/**
 * Technology Stack Section
 */
function TechStack() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container-wide relative">
        <div className="w-full grid grid-cols-9 gap-[14px] relative">
          <div className="row-start-2 row-end-4 col-start-3 col-end-8">
            <SectionHeading
              tag="Technology"
              title="Our Tech Stack"
              description="We work with the latest and most powerful technologies to build scalable, maintainable solutions."
            />
          </div>

          <div className="row-start-1 col-start-1 col-end-1">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Kotlin}
                  alt="Kotlin"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Kotlin</p>
            </div>
          </div>

          <div className="row-start-1 col-start-2 col-end-3">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Github}
                  alt="Kotlin"
                  className="w-full h-full object-contain  [filter:brightness(0)_saturate(100%)_invert(99%)_sepia(64%)_saturate(2%)_hue-rotate(207deg)_brightness(113%)_contrast(100%)]"
                />
              </div>
              <p className="mt-2.5 text-sm">Github</p>
            </div>
          </div>

          <div className="row-start-1 col-start-8 col-end-8">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Swift}
                  alt="Swift"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Swift</p>
            </div>
          </div>

          <div className="row-start-1 col-start-9 col-end-9">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Php}
                  alt="PHP"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">PHP</p>
            </div>
          </div>

          <div className="row-start-2 col-start-1 col-end-1">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Cloud}
                  alt="Cloud"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Cloud</p>
            </div>
          </div>

          <div className="row-start-2 col-start-2 col-end-2">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Azure}
                  alt="Azure"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Azure</p>
            </div>
          </div>

          <div className="row-start-2 col-start-8 col-end-8">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Next}
                  alt="Next.js"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Next.js</p>
            </div>
          </div>

          <div className="row-start-2 col-start-9 col-end-9">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Shopify}
                  alt="Shopify"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Shopify</p>
            </div>
          </div>

          <div className="row-start-3 col-start-1 col-end-1">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Angular}
                  alt="Angular"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Angular</p>
            </div>
          </div>

          <div className="row-start-3 col-start-2 col-end-2">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Nodejs}
                  alt="Node.js"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Node.js</p>
            </div>
          </div>

          <div className="row-start-3 col-start-3 col-end-3">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Go}
                  alt="Go"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Go</p>
            </div>
          </div>

          <div className="row-start-3 col-start-7 col-end-7">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={SqlServer}
                  alt="SqlServer"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">SQL Server</p>
            </div>
          </div>

          <div className="row-start-3 col-start-8 col-end-8">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Sass}
                  alt="Sass"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Sass</p>
            </div>
          </div>

          <div className="row-start-3 col-start-9 col-end-9">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Gatsby}
                  alt="Gatsby"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Gatsby</p>
            </div>
          </div>

          <div className="row-start-4 col-start-2 col-end-2">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Kotlin}
                  alt="Kotlin"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Kotlin</p>
            </div>
          </div>

          <div className="row-start-4 col-start-3 col-end-3">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Kotlin}
                  alt="Kotlin"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Kotlin</p>
            </div>
          </div>

          <div className="row-start-4 col-start-4 col-end-4">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Kotlin}
                  alt="Kotlin"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Kotlin</p>
            </div>
          </div>

          <div className="row-start-4 col-start-6 col-end-6">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Kotlin}
                  alt="Kotlin"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Kotlin</p>
            </div>
          </div>

          <div className="row-start-4 col-start-7 col-end-7">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Kotlin}
                  alt="Kotlin"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Kotlin</p>
            </div>
          </div>

          <div className="row-start-4 col-start-8 col-end-8">
            <div className=" text-center rounded-md h-[130px] w-[130px] flex flex-col justify-center items-center transition-all duration-200">
              <div className="h-[50px] w-[80px]">
                <img
                  src={Kotlin}
                  alt="Kotlin"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2.5 text-sm">Kotlin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
