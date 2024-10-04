import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 800 800"
      width={width || size}
      height={height || size}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(372)"
        d="m0 0h59l58 11 27 7 29 10 26 11 24 12 23 14 14 10 21 16 15 13 15 14 9 9 7 8 14 17 13 18 11 17 12 21 12 24 9 23 7 20 6 23 8 37 4 34 1 11v39l-5 40-5 29-7 28-9 27-11 26-10 20-12 20-16 24-9 12-9 11-13 15-22 22-8 7-13 11-13 10-18 12-24 14-25 13-26 11-25 9-25 7-34 7-34 6h-45l-20-4-30-5-32-8-33-11-34-14-29-14-17-10-15-10-13-10-14-12-12-11-15-15-7-8-10-11-9-11-12-16-10-15-14-24-12-22-10-23-10-30-9-34-4-18-6-42v-37l4-37 4-23 8-34 8-26 10-26 9-20 10-19 17-28 14-18 8-10 11-13 28-28 11-9 12-10 19-14 23-14 22-12 19-9 31-12 26-8 41-9z"
        fill="#DADB9F"
      />
      <path
        transform="translate(387,204)"
        d="m0 0h25l16 3 16 6 15 8 14 11 11 12 9 13h77l13 1 11 4 8 7 5 8 2 8v296h32l6 2 1 3v38l-4 13-7 9-11 7-6 2-8 1h-425l-10-2-10-5-8-7-7-14-1-6v-33l2-7 6-1 31-1 1-298 4-10 7-8 10-5 6-1 89-1 7-11 9-10 7-7 14-10 16-8 16-5z"
        fill="#050708"
      />
      <path
        transform="translate(245,308)"
        d="m0 0h47l2 19 4 16 5 12 8 16 8 18 6 18 1 7-6 7-2 4v9l4 8 7 4 9 1 1 12 3 5v2l15 5 2 12 6 7 7 3h56l7-3 5-6 1-9v-4l10-2 3-3 4-2 3-7v-9l12-3 6-5 3-8v-6l-3-6-5-5 1-10 5-16 16-33 4-9 4-12 2-11 1-16h48l1 1v232l-1 2-308 1-3-1v-234z"
        fill="#7DD3E1"
      />
      <path
        transform="translate(225,269)"
        d="m0 0 14 1h60l-2 9-4 17-1 1-58 1-1 2v21l-1 40v119l1 50 1 18 1 2-1 2 11 1 49 1h21l2-1 167 1h78l4-1 1-245 3-8-5-2-58-1-3-7-5-19 1-2 1 1h82l7 3 3 2v2l3 1 1 2 1 129v106l1 46-1 15-4 4-7 1-41 2-61-1h-83l-5 1h-31l-5-1h-126l-30-1-2-1-1-3v-296l2-5 3-3 8-3z"
        fill="#052E2B"
      />
      <path
        transform="translate(388,216)"
        d="m0 0h23l17 3 12 5 16 9 12 11 7 7 10 16 6 14 4 17v25l-4 16-7 17-10 19-6 15-4 13-1 8-1 1h-125l-4-17-5-15-15-29-7-19-2-15v-10l2-16 5-16 8-16 10-13 11-10 14-9 10-5 17-5z"
        fill="#30424E"
      />
      <path
        transform="translate(166,594)"
        d="m0 0h152l2 1 1 10 5 13 6 4 5 2 9 1 24 1h80l15-2 7-4 5-8 2-6 1-10 1-1h153l1 1v23l-2 9-3 5h-2v2l-7 6-6 1h-272l-63 1h-85l-14-1-7-4-2-4-3-1-4-8-1-7v-14l1-9z"
        fill="#2B564E"
      />
      <path
        transform="translate(388,216)"
        d="m0 0h23l17 3 12 5 16 9 12 11 7 7 10 16 6 14 4 17v25l-4 16-7 17-10 19-6 15-4 13-1 8-1 1h-125l-4-17-5-15-15-29-7-19-2-15v-10l2-16 5-16 8-16 10-13 11-10 14-9 10-5 17-5zm8 20-9 2-5 5-3 8-1 6h-5l-8-5-10-1-9 6-9 11-1 5 4 10 3 5v4l-13 3-6 5-2 5v18l3 6 6 4 13 3-3 7-4 7-1 6 4 8 9 10 6 3h8l11-6 4 1 2 9 5 8 3 2 5 1h14l7-3 4-5 3-7 1-7 15 7h8l6-4 9-9 3-5-1-9-5-10-1-5 10-1 6-3 5-6 1-15-2-8-5-6-10-3-4-1 1-7 5-8v-7l-6-9-9-8-4-2h-7l-12 6h-3l-4-13-3-5-9-3z"
        fill="#F0C859"
      />
      <path
        transform="translate(396,236)"
        d="m0 0h10l9 3 5 10 2 8 5-1 10-5h7l9 6 8 9 2 4v7l-6 10v5l12 3 6 5 2 4 1 13-2 10-7 6-8 2h-5l3 9 4 9v6l-6 8-8 8-4 2h-8l-15-7-2 10-5 8-4 3-4 1h-14l-7-2-4-5-3-7-2-7-5 1-9 5h-8l-8-5-8-9-3-8 3-9 4-6 1-4-13-3-6-4-3-6v-18l3-6 5-4 13-3-1-6-5-9-1-6 4-7 8-9 7-4 10 1 8 5h5l3-12 4-6 4-2zm-3 12-2 1-2 10-2 6-9 4h-7l-11-5-5 1-4 3v2h-2l-1 5 7 8 1 7-6 11-1 3-11 1-5 5 1 9 4 4 12 3 5 9v8l-6 9v4l8 9 5-1 8-6h7l10 5 3 4 3 12 6-1 7 1 5-13 5-5 8-4 4 1 8 5 3 2 5-1 2-5 4-2 2-2-8-12v-7l5-11 13-2 4-4 1-4-3-8-3-2-9-2-5-6-3-7v-6l7-8 1-5-10-7h-6l-6 5-5 1-13-6-3-8-1-7-1-1z"
        fill="#040607"
      />
      <path
        transform="translate(560,297)"
        d="m0 0 7 1 3 2-2 8-1 243-3 3-7 1h-76l-165-1-54-1v-2h-17l-1-5 3-1 11-1h297l1-1v-236h2l1-8z"
        fill="#030606"
      />
      <path
        transform="translate(234,297)"
        d="m0 0h33v1l-8 1h31l3 7v4h2l1 4v7l1 3-1 5-3-2-1-7v-12l-47 1-1 234h311v-234l-48-1v-1h49l1 1v235l-2 2h-297l-14 1 1 5h17v2h54l-1 2h-35l-41-1-5-2-1-4-1-21-1-61v-106l1-49v-11z"
        fill="#102624"
      />
      <path
        transform="translate(394,284)"
        d="m0 0h10l10 3 10 9 4 6 2 9v9l-4 9-7 8-5 4-8 3h-11l-10-4-6-4-6-7-3-7v-15l6-12 7-7z"
        fill="#040607"
      />
      <path
        transform="translate(236,591)"
        d="m0 0h24l60 1 2 4v11l-2-2v-10h-154l-1 9v14l2 10 3 5 8 7 3 1 14 1h85l80-1h255l8-2 3-4h2v-2h2l2-5 2-9v-23h-153l-1 11-5 10-4 5-6 3-18 2h-84l-20-1-7-1-10-6-2-5 8 6 5 2 14 1h103l14-2v-2l4-2 4-7 2-15 1-3 56-1h60l41 1 1 1 1 12v10l-1 10-5 9-5 5-8 4-11 1-77 1h-208l-140-1-9-4-5-4-5-9-1-4v-28l3-3z"
        fill="#213F3C"
      />
      <path
        transform="translate(207,261)"
        d="m0 0 2 1-10 8-2 5 9-5 5-3 12-1 15 1h58l4 1-1 4v-2l-61 1-13-1-10 1-9 4-2 2-1 7v296l45 1h115l2 2h-29l-12 1-112 1-13-2-2-2-1-4v-8l1-10v-117l-1-103-2-23-1 8-1 111h-1v-153l4-10 7-8z"
        fill="#081414"
      />
      <path
        transform="translate(560,297)"
        d="m0 0 7 1 3 2-2 8-1 243-3 3-7 1h-37l-22-1v-2l17-1h17l9-1h9l9 1 1-5h-27v-1l22-1 1-1v-236h2l1-8z"
        fill="#030F0F"
      />
      <path
        transform="translate(346,593)"
        d="m0 0h103l18 1 1 4-2 10-5 4-18 1h-98l-8-2-2-1-3-11v-5z"
        fill="#062F2C"
      />
      <path
        transform="translate(577,268)"
        d="m0 0h10l7 4 3 3 1 3 1 18v86l1 128v66l-2 4-6 2-6 1-25 1-8 2 9 2h22l2 1 51 2 2 2v31l-5 14-10 6v1l-13 1h-78l-2-2 77-1 11-1 10-5 5-8 2-4 1-10v-13l-1-9-41-1h-116l-2 18-5 8-4 1 6-10 1-3v-12l2-3 6-1 23-1 5-1-1-2-8-1h-30l-22-1-11-1h-38l1-2h93l53 1 42-2 6-2 1-2 1-16-1-58v-94l-1-128-3-3v-2l-5-2-6-2h-80v-1l68-1z"
        fill="#030D0D"
      />
      <path
        transform="translate(330,425)"
        d="m0 0h139l2 2v6l-4 2h-136l-2-3v-6z"
        fill="#909982"
      />
      <path
        transform="translate(240,328)"
        d="m0 0 2 1v198l-3-1-2-8-2-30-1-24v-85l1-29 1-7 1-11z"
        fill="#030405"
      />
      <path
        transform="translate(374,447)"
        d="m0 0h45l30 1 1 4v7h-99l-1-1v-9l1-1z"
        fill="#F1F4EF"
      />
      <path
        transform="translate(236,591)"
        d="m0 0h24l60 1 2 4v11l-2-2v-10h-154l-1 9v14l2 10 3 5 8 7 3 1 14 1 413 1v1l-77 1h-208l-140-1-9-4-5-4-5-9-1-4v-28l3-3z"
        fill="#062F2C"
      />
      <path
        transform="translate(394,296)"
        d="m0 0h10l9 4 4 6 1 4v9l-3 6-7 6-5 1h-9l-8-5-4-7-1-9 3-7 5-5z"
        fill="#F9FAF7"
      />
      <path
        transform="translate(215,268)"
        d="m0 0h19l65 1v1l-61 1-13-1-10 1-9 4-2 2-1 7v296h-2l-2-6v-83l1-170-1-31 1-10 2-5 7-5z"
        fill="#041A1A"
      />
      <path
        transform="translate(557,332)"
        d="m0 0 4 2 1 5h2l2 9v47l-1 32-1 13-2 10-2-1-3-16z"
        fill="#030405"
      />
      <path
        transform="translate(643,632)"
        d="m0 0h2l-2 6-6 8-11 7-6 2-8 1h-425l-10-2-3-2 14 1h424l13-3 4-1v-2l8-4z"
        fill="#152729"
      />
      <path
        transform="translate(527,591)"
        d="m0 0h68l38 1v1l-71 1h-63l-2 1-16 1-1 11-5 10-4 5-6 3-18 2h-84l-20-1-7-1-10-6-2-5 8 6 5 2 14 1h103l14-2v-2l4-2 4-7 2-15 1-3z"
        fill="#0C322F"
      />
      <path
        transform="translate(577,268)"
        d="m0 0h10l7 4 3 3 1 3 1 18v86l1 128v66l-2 4-6 2-6 1-35 1-3-2 42-2 6-2 1-2 1-16-1-58v-94l-1-128-3-3v-2l-5-2-6-2h-80v-1l68-1z"
        fill="#041A1A"
      />
      <path
        transform="translate(416,591)"
        d="m0 0h48l6 2 2 6-3 10-1 2h-2v2l-10 2h-107l-11-1-5-3-3-6v-9l2-2 3 12v4l12 2h104l10-1 5-5 1-12h-134l1-2z"
        fill="#030D0D"
      />
      <path
        transform="translate(371,471)"
        d="m0 0h57l2 2v9h-60v-10z"
        fill="#89907A"
      />
      <path
        transform="translate(198,503)"
        d="m0 0h2v71l1 6 47 1h115l2 2h-29l-12 1-112 1-13-2-2-2-1-4v-8l1-10v-32z"
        fill="#031212"
      />
      <path
        transform="translate(197,590)"
        d="m0 0h80l43 1v1h-84l-72 1v30l4 10 5 5 4 3 8 2 138 1v1l-14 1h-125l-12-4-6-5-4-7-2-23v-12l3-4z"
        fill="#030D0D"
      />
      <path
        transform="translate(236,591)"
        d="m0 0h24l60 1 2 4v11l-2-2v-10h-154l-1 9v14l2 10 3 5 8 7 3 1 14 1v1l-12 1-9-4-5-4-5-9-1-4v-28l3-3z"
        fill="#173936"
      />
      <path
        transform="translate(542,225)"
        d="m0 0 4 2 2 3-1 5-8 6-21 12-4 2-4-1-3-4 1-5 10-7z"
        fill="#05090A"
      />
      <path
        transform="translate(560,297)"
        d="m0 0 7 1 3 2-2 8-1 93-1 26h-1v-79l-1-7-4-4-1-3-2-2-1-25h2l1-8z"
        fill="#030E0E"
      />
      <path
        transform="translate(481,165)"
        d="m0 0 6 3 1 5-6 11-8 14-7 9-6-2-2-3 4-10 11-20 5-6z"
        fill="#05080A"
      />
      <path
        transform="translate(316,165)"
        d="m0 0 6 2 10 17 8 15v5l-6 3-4-2-12-20-6-11v-6z"
        fill="#06090B"
      />
      <path
        transform="translate(397,144)"
        d="m0 0h6l2 2 1 5v18l-1 19-9 1-2-2v-39l1-3z"
        fill="#06090A"
      />
      <path
        transform="translate(256,225)"
        d="m0 0 5 2 16 9 13 8 3 3-2 5-2 2-7-1-26-15-5-5 2-5z"
        fill="#060A0C"
      />
      <path
        transform="translate(334,426)"
        d="m0 0h9l4 2h117l7 3-1 2-5-1-129 1-5-2 1-4z"
        fill="#89907A"
      />
      <path
        transform="translate(599,347)"
        d="m0 0h1l1 83 1 147-3 5-12 3h-21l-5-1v-1l25-1 10-2 2-1 1-9v-72l-1-137v-9z"
        fill="#030D0D"
      />
      <path
        transform="translate(421,425)"
        d="m0 0h48l2 2-1 4-7-2h-100l1-2 19-1z"
        fill="#98D3CB"
      />
      <path
        transform="translate(449,452)"
        d="m0 0h1v7h-75v-1l-7-1v-1h7l1-2 9 1v-1h9 1l10-1h24l10 1 1 3h7z"
        fill="#C3D6AC"
      />
      <path
        transform="translate(566,401)"
        d="m0 0h1v150l-3 3-7 1h-37l-22-1v-1l51-1h14l1-4v-40l1-8v-29z"
        fill="#041A1A"
      />
      <path
        transform="translate(402,581)"
        d="m0 0h93l51 1v1l-43 1-1 1h-30l-22-1-11-1h-38z"
        fill="#031616"
      />
      <path
        transform="translate(577,265)"
        d="m0 0h11l7 4 4 4 1 5v48h-2v-36l-1-15-3-1-1-2-6-3h-10l-9 1-67 1-3-1-1-4 7 2h54l17-2z"
        fill="#030D0D"
      />
      <path
        transform="translate(527,591)"
        d="m0 0h68l38 1v1l-71 1h-63l-20 1v-3z"
        fill="#062F2C"
      />
      <path
        transform="translate(232,449)"
        d="m0 0h1l1 55v15l1 20v6l2 4 7 2 18 1 54 1-1 2h-35l-41-1-5-2-1-4-1-21-1-61v-15z"
        fill="#041A1A"
      />
      <path
        transform="translate(324,614)"
        d="m0 0 8 6 5 2 29 2 78 1-3 2h-78l-20-1-7-1-10-6z"
        fill="#24413E"
      />
      <path
        transform="translate(322,600)"
        d="m0 0h1l2 10 3 5 6 4 12 2h115l7-2v2l-5 2-9 1h-103l-14-1-8-4-6-7-1-3z"
        fill="#030D0D"
      />
      <path
        transform="translate(634,626)"
        d="m0 0 1 3-6 9-10 5h-149v-1l145-1 8-2 3-4h2v-2h2l2-4z"
        fill="#23403D"
      />
      <path
        transform="translate(465,431)"
        d="m0 0 5 1v2h-60l-44-1v-1z"
        fill="#9AD5CC"
      />
      <path
        transform="translate(383,426)"
        d="m0 0h44v1h-6v2h-58l1-2z"
        fill="#96D6D0"
      />
      <path
        transform="translate(309,337)"
        d="m0 0 3 4 5 13 6 10 8 17 5 15 3 14h15v1l-17 1-4-17-5-15-15-29-4-10z"
        fill="#D6CD89"
      />
      <path
        transform="translate(609,581)"
        d="m0 0h32l6 2 1 3v38h-1l-1-10v-30h-32l-5-2z"
        fill="#17252A"
      />
      <path
        transform="translate(393,248)"
        d="m0 0h14l1 1v6l-3-1-1 2v-2h-5l1 4-3-1-2-2-5 10h-2l2-9 1-7z"
        fill="#24403E"
      />
      <path
        transform="translate(499,593)"
        d="m0 0h68v3h-37l-33-1z"
        fill="#24413E"
      />
      <path
        transform="translate(324,614)"
        d="m0 0 8 6 5 2 42 3-1 2h-15l-20-1-7-1-10-6z"
        fill="#24413E"
      />
      <path
        transform="translate(459,305)"
        d="m0 0 5 2 3 9-3 5-2 2-5-1 2-5-2-1v-5h5l-3-4z"
        fill="#24413E"
      />
      <path
        transform="translate(394,148)"
        d="m0 0h1v9h2l1 14v14l-3 3-1-1z"
        fill="#061011"
      />
      <path
        transform="translate(163,595)"
        d="m0 0h2v23l2 10 3 5 8 7 3 1 14 1v1l-12 1-9-4-5-4-5-9-1-4z"
        fill="#1D3C39"
      />
      <path
        transform="translate(436,264)"
        d="m0 0h6l10 7-1 5-4 4v-3l-3-1 3-2v-4h-8l-4-2-1 2-2-2z"
        fill="#203E3B"
      />
      <path
        transform="translate(356,264)"
        d="m0 0 7 1 4 3-3 2-7 2-6 2-1 3-2-3 1-4h2l1-3z"
        fill="#213F3C"
      />
      <path
        transform="translate(421,425)"
        d="m0 0h30l-2 4h-28z"
        fill="#81D4DF"
      />
      <path
        transform="translate(643,632)"
        d="m0 0h2l-2 6-6 8-11 7-6 2h-8l1-2 16-4v-2l8-4z"
        fill="#101F20"
      />
      <path
        transform="translate(466,225)"
        d="m0 0 8 6 7 7 10 13 5 2 1 4-4 1-12-16-10-11-5-4z"
        fill="#E4E5D0"
      />
      <path
        transform="translate(398,426)"
        d="m0 0h29v1h-6v2h-24z"
        fill="#9ED6CA"
      />
      <path
        transform="translate(454,304)"
        d="m0 0h12l2 3v10l-3 5h-3l3-3 1-4-2-8-10-2z"
        fill="#030D0D"
      />
      <path
        transform="translate(352,426)"
        d="m0 0h31v1l-19 1-1 1h-14l3-1z"
        fill="#D9DBA1"
      />
      <path
        transform="translate(331,388)"
        d="m0 0h2l3 8 3 14h15v1l-17 1-4-17z"
        fill="#D1CE92"
      />
      <path
        transform="translate(609,581)"
        d="m0 0h32v1l-15 1-1 1h-11l-5-2z"
        fill="#1A3532"
      />
      <path
        transform="translate(454,623)"
        d="m0 0h11v2l-18 2h-3v-2z"
        fill="#1E3D3A"
      />
      <path
        transform="translate(634,626)"
        d="m0 0 1 3-6 9-8 4v-2l5-5h2v-2h2l2-4z"
        fill="#1C3C39"
      />
      <path
        transform="translate(324,614)"
        d="m0 0 8 6 5 2 14 1v1l-15 1-10-6z"
        fill="#153835"
      />
      <path
        transform="translate(168,633)"
        d="m0 0 4 1 5 5 4 2 14 1v1l-12 1-9-4-5-4z"
        fill="#1E3D3A"
      />
      <path
        transform="translate(293,310)"
        d="m0 0h2l1 4v7l1 3-1 5-3-2z"
        fill="#051111"
      />
      <path
        transform="translate(438,261)"
        d="m0 0h4v2l4 2 8 6-1 3-5-5-6-4h-5v-3z"
        fill="#030D0D"
      />
      <path
        transform="translate(476,610)"
        d="m0 0h2l-2 5-5 7-6 2-2-2 5-1v-2l4-2z"
        fill="#163936"
      />
      <path
        transform="translate(415,472)"
        d="m0 0h14l-1 5-7-1-1-3h-5z"
        fill="#84D4DC"
      />
      <path
        transform="translate(339,425)"
        d="m0 0h19v1h-6v2l-5 1-8-3z"
        fill="#91D3D1"
      />
      <path
        transform="translate(643,632)"
        d="m0 0h2l-2 6-6 8-4 3-2-1 7-6z"
        fill="#1E3637"
      />
      <path
        transform="translate(400,426)"
        d="m0 0h27v1h-6v2h-4v-2h-17z"
        fill="#CDDAA9"
      />
      <path
        transform="translate(330,425)"
        d="m0 0h9v1l-7 2-1 4h3l-1 3-3-1-1-2v-6z"
        fill="#C2CC9E"
      />
      <path
        transform="translate(370,472)"
        d="m0 0h7l-3 1v7h-4z"
        fill="#B2CCAA"
      />
      <path
        transform="translate(331,431)"
        d="m0 0 9 1v2h11v1h-18l1-3z"
        fill="#82D4DE"
      />
      <path
        transform="translate(505,250)"
        d="m0 0 4 2v4l2 1h-7l-3-2h3z"
        fill="#FAFAF9"
      />
      <path
        transform="translate(358,261)"
        d="m0 0 5 2 4 4-9-2-6 2 4-5z"
        fill="#030D0D"
      />
      <path
        transform="translate(489,251)"
        d="m0 0 7 2 1 4-4 1-4-5z"
        fill="#EFF2EB"
      />
      <path
        transform="translate(422,370)"
        d="m0 0 5 1 4 4-7-1-3 2z"
        fill="#D3D196"
      />
    </svg>
  );
};
