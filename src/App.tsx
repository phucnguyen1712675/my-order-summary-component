import IllustrationHero from './assets/images/illustration-hero.svg';
import IconMusic from './assets/images/icon-music.svg';

function App() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex h-screen w-full items-center justify-center bg-pale-blue bg-[url('../public/assets/images/pattern-background-mobile.svg')] bg-contain bg-no-repeat xl:bg-[url('../public/assets/images/pattern-background-desktop.svg')]">
        <div className="mx-auto flex min-h-[500px] w-[330px] flex-initial flex-col rounded-xl bg-white shadow-2xl shadow-bright-blue/10 xl:w-[400px]">
          <img
            className="w-full flex-initial rounded-tl-xl rounded-tr-xl bg-no-repeat object-cover"
            src={IllustrationHero}
            alt=""
          />
          <div className="flex flex-grow flex-col items-center gap-y-4 px-6 py-5 xl:px-10 xl:py-8">
            <h3 className="pt-2 text-2xl font-extrabold text-dark-blue">Order summary</h3>
            <p className="mb-2 text-center font-light tracking-wide text-desaturated-blue line-clamp-3 xl:text-sm">
              You can now listen to millions of songs, audiobooks, and podcasts on any device
              anywhere you like!
            </p>
            <div className="mb-2 flex w-full items-center gap-x-5 rounded-xl bg-very-pale-blue/50 p-4">
              <div className="flex h-12 w-12 flex-initial items-center justify-center">
                <img src={IconMusic} alt="" />
              </div>
              <div className="flex flex-col justify-center gap-y-1">
                <p className="text-sm font-extrabold text-dark-blue">Annual Plan</p>
                <p className="text-sm font-medium text-desaturated-blue">$59.99/year</p>
              </div>
              <a
                className=" ml-auto text-sm font-bold text-bright-blue underline transition-colors hover:text-opacity-70 hover:no-underline"
                href="#">
                Change
              </a>
            </div>
            <div className="flex w-full flex-col items-stretch gap-y-2">
              <button className="rounded-xl bg-bright-blue py-4 text-center text-sm font-bold text-white shadow-2xl shadow-bright-blue/30 transition-colors hover:bg-opacity-70">
                Proceed to Payment
              </button>
              <button className="py-4 text-center text-sm font-extrabold text-desaturated-blue transition-colors hover:text-dark-blue">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
