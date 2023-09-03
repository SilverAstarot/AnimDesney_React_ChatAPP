import { email, required } from "utils/validate.util";
import InputRedux from "components/molecules/InputRedux";
import { ReduxFormField } from "components/molecules/ReduxFormFields";
import SelectRedux from "components/molecules/SelectRedux";
import DatePickerRedux from "components/molecules/DatePickerRedux";
import PhoneInputRedux from "components/molecules/PhoneInputRedux";

export { default } from "./RegisterForm";

export const fields: ReduxFormField[] = [
  {
    name: "name",
    label: "Name",
    // validate: [required],
    component: InputRedux,
    cellProps: { md: 12 },
  },
  {
    name: "race",
    label: "Race",
    // validate: [required],
    component: SelectRedux,
    SelectProps: {
      options: [
        { value: "Alien", label: "Alien" },
        { value: "Android", label: "Android" },
        { value: "Angel", label: "Angel" },
        { value: "Animal", label: "Animal" },
        { value: "Anime", label: "Anime" },
        { value: "Alpha", label: "Alpha" },
        { value: "Beta", label: "Beta" },
        { value: "Butler", label: "Butler" },
        { value: "Centaur", label: "Centaur" },
        { value: "Charity", label: "Charity" },
        { value: "Chastity", label: "Chastity" },
        { value: "Cyborg", label: "Cyborg" },
        { value: "DC Universe", label: "DC Universe" },
        { value: "Demon", label: "Demon" },
        { value: "Devil", label: "Devil" },
        { value: "Digimon", label: "Digimon" },
        { value: "Diligence", label: "Diligence" },
        { value: "Disney", label: "Disney" },
        { value: "Dragon", label: "Dragon" },
        { value: "Dragon Ball", label: "Dragon Ball" },
        { value: "Envy", label: "Envy" },
        { value: "Fairy", label: "Fairy" },
        { value: "Furry", label: "Furry" },
        { value: "Ghost", label: "Ghost" },
        { value: "Gluttony", label: "Gluttony" },
        { value: "God", label: "God" },
        { value: "Goddess", label: "Goddess" },
        { value: "Greed", label: "Greed" },
        { value: "Hentai", label: "Hentai" },
        { value: "Human", label: "Human" },
        { value: "Humility", label: "Humility" },
        { value: "Hunter", label: "Hunter" },
        { value: "Huntress", label: "Huntress" },
        { value: "Incubus", label: "Incubus" },
        { value: "Kindness", label: "Kindness" },
        { value: "King", label: "King" },
        { value: "Knight", label: "Knight" },
        { value: "Lion", label: "Lion" },
        { value: "Lioness", label: "Lioness" },
        { value: "Lust", label: "Lust" },
        { value: "Maid", label: "Maid" },
        { value: "Marvel", label: "Marvel" },
        { value: "Mermaid", label: "Mermaid" },
        { value: "Merman", label: "Merman" },
        { value: "Omega", label: "Omega" },
        { value: "Patience", label: "Patience" },
        { value: "Pirate", label: "Pirate" },
        { value: "Pokemon", label: "Pokemon" },
        { value: "Pride", label: "Pride" },
        { value: "Princess", label: "Princess" },
        { value: "Prince", label: "Prince" },
        { value: "Queen", label: "Queen" },
        { value: "Robot", label: "Robot" },
        { value: "RWBY", label: "RWBY" },
        { value: "Sailor Moon", label: "Sailor Moon" },
        { value: "Sloth", label: "Sloth" },
        { value: "Succubus", label: "Succubus" },
        { value: "Temperance", label: "Temperance" },
        { value: "Vampire", label: "Vampire" },
        { value: "Werewolf", label: "Werewolf" },
        { value: "Witch", label: "Witch" },
        { value: "Wizard", label: "Wizard" },
        { value: "Wolf", label: "Wolf" },
        { value: "Wrath", label: "Wrath" },
        { value: "Zombie", label: "Zombie" },
      ],
    },
    cellProps: { md: 12 },
  },
  {
    name: "gender",
    label: "Gender",
    // validate: [required],
    component: SelectRedux,
    SelectProps: {
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    cellProps: { lg: 12 },
  },

  {
    name: "email",
    label: "Email",
    // validate: [required, email],
    component: InputRedux,
    cellProps: { md: 12 },
    InputProps: { type: "email" },
  },
  {
    name: "password",
    label: "Password",
    // validate: [required],
    component: InputRedux,
    cellProps: { md: 12 },
    InputProps: { showIcon: true, type: "password" },
  },
  {
    name: "dob",
    label: "Date of Birth",
    // validate: [date],
    component: DatePickerRedux,
    cellProps: { md: 12 },
    DatePickerProps: {
      onChange: () => {},
      maxDate: new Date(),
      InputFieldProps: {},
      value: { date: "", error: false },
    },
  },
  {
    name: "age",
    label: "Age",
    // validate: [required],
    component: InputRedux,
    cellProps: { md: 12 },
    InputProps: { disabled: true },
  },
  {
    name: "star",
    label: "Star Sign",
    // validate: [required],
    component: InputRedux,
    cellProps: { md: 12 },
    InputProps: { disabled: true },
  },
  {
    name: "zodiac",
    label: "Zodiac Animal",
    // validate: [required],
    component: InputRedux,
    cellProps: { md: 12 },
    InputProps: { disabled: true },
  },
  {
    name: "planet",
    label: "Planet",
    // validate: [required],
    component: InputRedux,
    cellProps: { md: 12 },
    InputProps: { disabled: true },
  },
];

export const updateFields: ReduxFormField[] = [
  // {
  //   name: "hair",
  //   label: "Hair Color",
  //   component: SelectRedux,
  //   SelectProps: {
  //     options: [
  //       { value: "red", label: "Red" },
  //       { value: "pink", label: "Pink" },
  //       { value: "purple", label: "Purple" },
  //       { value: "yellow", label: "Yellow" },
  //       { value: "orange", label: "Orange" },
  //       { value: "blue", label: "Blue" },
  //       { value: "green", label: "Green" },
  //       { value: "brown", label: "Brown" },
  //       { value: "black", label: "Black" },
  //       { value: "grey", label: "Grey" },
  //       { value: "white", label: "White" },
  //     ],
  //   },
  //   cellProps: { lg: 12 },
  // },
  // {
  //   name: "eyes",
  //   label: "Eyes Color",
  //   component: SelectRedux,
  //   SelectProps: {
  //     options: [
  //       { value: "red", label: "Red" },
  //       { value: "pink", label: "Pink" },
  //       { value: "purple", label: "Purple" },
  //       { value: "yellow", label: "Yellow" },
  //       { value: "orange", label: "Orange" },
  //       { value: "blue", label: "Blue" },
  //       { value: "green", label: "Green" },
  //       { value: "brown", label: "Brown" },
  //       { value: "black", label: "Black" },
  //       { value: "grey", label: "Grey" },
  //       { value: "white", label: "White" },
  //     ],
  //   },
  //   cellProps: { lg: 12 },
  // },
  // {
  //   name: "height",
  //   label: "Height",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "weight",
  //   label: "Weight",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "blood",
  //   label: "Blood Type",
  //   component: SelectRedux,
  //   SelectProps: {
  //     options: [
  //       { value: "A+", label: "A+" },
  //       { value: "A-", label: "A-" },
  //       { value: "B+", label: "B+" },
  //       { value: "B-", label: "B-" },
  //       { value: "O+", label: "O+" },
  //       { value: "O-", label: "O-" },
  //       { value: "AB+", label: "AB+" },
  //       { value: "AB-", label: "AB-" },
  //     ],
  //   },
  //   cellProps: { lg: 12 },
  // },
  // {
  //   name: "relationship",
  //   label: "Relationship Status",
  //   component: SelectRedux,
  //   SelectProps: {
  //     options: [
  //       { value: "single", label: "Single" },
  //       { value: "partner", label: "Partner" },
  //     ],
  //   },
  //   cellProps: { lg: 12 },
  // },
  {
    name: "phone",
    label: "Phone",
    component: PhoneInputRedux,
    cellProps: { md: 12 },
  },
  // {
  //   name: "facebook",
  //   label: "Facebook",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "instagram",
  //   label: "Instagram",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "twitter",
  //   label: "Twitter",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "youtube",
  //   label: "Youtube",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "snapchat",
  //   label: "Snapchat",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "tiktok",
  //   label: "Tiktok",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "discord",
  //   label: "Discord",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
  // {
  //   name: "paypal",
  //   label: "Paypal",
  //   component: InputRedux,
  //   cellProps: { md: 12 },
  // },
];