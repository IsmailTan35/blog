import type { MouseEvent } from "react";

interface AppLink {
  appLink: string;
  app: RegExp;
}

// Inside the platform's own in-app browser, open the native app instead of the
// web page. Everywhere else the link's normal href (new tab) is used.
const openAppOrWeb = (event: MouseEvent<HTMLAnchorElement>, link: AppLink) => {
  if (link.app.test(navigator.userAgent.toLowerCase())) {
    event.preventDefault();
    window.location.href = link.appLink;
  }
};

export default openAppOrWeb;
