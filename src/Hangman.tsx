const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%", //perfect circle
      border: "10px solid black",
      position: "absolute",
      top: "50px", //the rod element is 50px in height
      right: "-30px", //(width 50px / 2) = 25px + (border 10px / 2) 5px = 30px
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px", //below the head
      right: 0,
    }}
  />
);

const R_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom", //rotation occur at the left botton instead of center of the element
    }}
  />
);

const L_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const R_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const L_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: 0,
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, R_ARM, L_ARM, R_LEG, L_LEG];

type HangmanProps = {
  numberOfGuesses: number;
};

export function Hangman({ numberOfGuesses }: HangmanProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute", //<- allowing precise placement using
          top: 10, //the top, bottom, left, and right properties
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px", //start this horizontal line from the center
        }}
      />
      <div
        style={{
          height: "400px", //this straight bar has 10px width
          width: "10px", //and the total width of this component is 250px -> refer line 123
          background: "black", //250px - 10px = 240px, 240px / 2 = 120px
          marginLeft: "120px", //so to center this element, margin left 120px will do
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
