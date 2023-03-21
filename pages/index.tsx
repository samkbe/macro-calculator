import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Container } from "@mui/system";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import Slider from "@mui/material/Slider";

const Home: NextPage = () => {
  const [weight, setWeight] = useState<number>(70);
  const [bodyFat, setBodyFat] = useState<number>(15);

  return (
    <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
      <Head>
        <title>Calculate Your Macros</title>
        <meta
          name="description"
          content="Calculate your macros based on Jeff Nippard's Body Recomp guide"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <FormControl>
          <Slider
            size="small"
            defaultValue={70}
            onChange={(e) =>
              setWeight(parseInt((e.target as HTMLInputElement).value))
            }
            aria-label="Weight"
            valueLabelDisplay="auto"
            min={50}
            max={400}
          />
          <Slider
            size="small"
            defaultValue={15}
            onChange={(e) =>
              setBodyFat(parseInt((e.target as HTMLInputElement).value))
            }
            aria-label="BodyFat"
            valueLabelDisplay="auto"
            min={3}
            max={100}
          />
          {/*Height*/}

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Container>
    </div>
  );
};

export default Home;
