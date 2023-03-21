import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

//Calculate BMR

//BMR (Basal Metabolic Rate):
// Your BMR is essentially how many calories your body burns per day in order to perform all
// of its basic metabolic functions and maintain its body mass at rest.
// 10 x weight(kg) + 6.25 x height(cm) - 5 x age(y) + 5 (man)
// 10 x weight(kg) + 6.25 x height(cm) - 5 x age(y) - 161 (woman)

//Calculate Maintanance Calories

//LIFESTYLE & TRAINING FREQUENCY
//Sedentary + Training 3-6x/wk -- 1.35x
// Works a desk job, very little activity outside of lifting
//Lightly Active + Training 3-6x/wk -- 1.65x
// Works a desk job, takes pet for a walk most days in addition to lifting
//Moderately Active + Training 3-6x/wk -- 1.9x
// Works as a full-time waitress, occasionally plays tennis in addition tolifting
//Highly Active + Training 3-6x/wk -- 2.1x
//Works as a construction worker, regular hiking in addition to lifting

//Use multiplier on BMR

//Calculate Calories
//Gender
//Goal:
// Lose fat
// Maintain
// Gain Weight
//Experience:
//Beginner
//Intermediate
//Expert
//Body Fat %;
//

/*
    • Step 1: Weigh yourself and calculate your body fat % (via BIA, Skin Calipers, DEXA, or
guesstimation)
• Step 2. Calculate LBM: Bodyweight x (0.XX as % of lean mass) i.e. if you weigh 170lbs
at 15% bodyfat, you have 85% lean mass. Your LBM would be: 170lbs x 0.85 = 144.5lbs
LBM
• Step 3: Estimate your Basal Metabolic Rate (BMR) using the according to Mifflin St. Jeor
Formula or (more roughly) bodyweight(lbs) x 10.
• Step 4: Apply the appropriate activity multiplier to determine your theoretical
maintenance calories. Alternatively, use a 2 week guess-and-check method to determine
maintenance calories.
• Step 5: Determine whether you should be in a caloric surplus, caloric deficit or at
maintenance to drive body recomposition. Apply the surplus/deficit to your theoretical
maintenance to determine your recomp calorie intake. (Important step!)
• Step 6: Set up your protein intake by multiplying your LBM by 1.2-1.6 (closer to 1.6 the
leaner you are).
• Step 7: Determine what percentage of calories should come from fat (20-35%). Closer
to 20 percent the leaner you are.
• Step 8: Calculate your fat intake by multiplying your recomp calorie intake by the
percentage in Step 7 and dividing by 9. (9 calories per gram of fat)
• Step 9: Calculate your “remaining calories” by subtracting the calories from protein
(protein intake x 4) and the calories from fat (fat intake x 9).
• Step 10: Calculate your carb intake from the “remaining calories” by dividing by 4. (4
calories per gram of carbs)

    */
