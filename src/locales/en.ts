import { LocaleType } from "./index";

const en: LocaleType = {
  Symbol: "en",
  Title: "English",
  System: {
    Title: "System",
    Wait: "Wait",
    WaitVideo: "Video generation in progress, please wait...",
    Back: "Back",
    Download: "Download",
    Delete: "Delete",
  },
  Error: {
    Title: "System Error",
    TokenMiss: (domain: string) =>
      `This tool has been disabled/deleted, for more information please visit ${domain}`, // -10001
    TokenInvalid: (domain: string) =>
      `This tool has been disabled/deleted! For more information please visit ${domain}`, // -10002
    InternalError: (domain: string) =>
      `Internal error, for more information please visit ${domain}`, // -10003
    AccountOut: (domain: string) =>
      `Account overdue, for more information please visit ${domain}`, // -10004
    TokenExpired: (domain: string) =>
      `Verification code expired, for more information please visit ${domain}`, // -10005
    TotalOut: (domain: string) =>
      `Total quota for this tool has been used up, more information please visit ${domain}`, // -10006
    TodayOut: (domain: string) =>
      `Daily quota for this tool has been used up, for more information please visit ${domain}`, // -10007
    HourOut: (domain: string) =>
      `This free tool's hour quota reached maximum limit. Please view ${domain} to create your own tool`, // -10012
    GenerateImageError:
      "Image generation error, please try switching models or modifying the prompt",
  },
  Auth: {
    Title: "Authorization",
    NeedCode: "Share code required",
    InputCode:
      "The creator has enabled verification, please enter the share code below",
    PlaceHolder: "Please enter the share code",
    ToolBin: "Tool has been disabled, more information please visit",
    ToolDel: "Tool has been deleted, more information please visit",
    Submit: "Submit",
    Remind: "Remember the share code",
    CodeError: "Verification code error!",
    AccountBin: "Account has been disabled!",
    AccountDel: "Account has been canceled!",
    NetworkError: "Network error, please refresh the page and try again!",
  },
  Home: {
    Title: "Home",
  },
  About: {
    Title: "About",
    Desc: "AI Video Generator",
    Loading: "Loading...",
    CreateInfo: (user: string) =>
      `This tool was created by 302.AI user ${user}, 302.AI is a platform for generating and sharing AI tools, you can generate your own AI tools with one click`,
    TotalInfo: (all: number, use: number) =>
      `The total quota for this tool is <${all}PTC>, <${use}PTC> has been used`,
    DayInfo: (all: number, use: number) =>
      `The daily quota for this tool is <${all}PTC>, <${use}PTC> has been used`,
    RecordInfo:
      "The generation records of this tool are stored locally and will not be uploaded. The user who generated this tool cannot see your generation records",
    MoreInfo: (domain: string) =>
      `For more information, please visit: ${domain}`,
  },
  History: {
    Title: "History",
    Empty: "Sorry, no history records!",
    Clean: "Clear",
    DownloadImage: "Download video",
    ItemCount: (count: number) => `Total ${count} history records`,
  },
  Landing: {
    Title: "AI Tool Start",
    Desc: "Create your ai tool from here",
  },
  Footer: {
    Title: "Content generated by AI, for reference only",
  },
};

export default en;
