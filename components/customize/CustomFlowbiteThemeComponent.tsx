import type { CustomFlowbiteTheme } from "flowbite-react";

export const customTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "bg-[#253C95] text-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center  justify-between md:justify-start",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-start text-white mr-24 ml-4",
    },
    collapse: {
      base: "w-full md:block md:w-auto text-white",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0 text-white",
      active: {
        on: "bg-orange-800 text-white md:bg-transparent md:text-orange-400",
        off: "border-b border-gray-100  text-white hover:bg-orange-500 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-orange-400 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
  footer: {
    root: {
      base: "w-full bg-[#253C95] shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
      container: "w-full p-6",
      bgDark: "bg-gray-800",
    },
    groupLink: {
      base: "flex flex-wrap text-sm text-white",
      link: {
        base: "last:mr-0 md:mr-6 me-4",
        href: "hover:underline",
      },
      col: "flex-col space-y-4",
    },
    icon: {
      base: "text-gray-100 dark:hover:text-white",
      size: "h-5 w-5",
    },
    title: {
      base: "mb-6 text-sm font-semibold uppercase text-white",
    },
    divider: {
      base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8",
    },
    copyright: {
      base: "text-sm text-white dark:text-gray-400 sm:text-center",
      href: "ml-1 hover:underline",
      span: "ml-1",
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0 text-white",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-2xl font-bold text-white ",
    },
  },
  carousel: {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
      snap: "snap-x",
    },
  },
};
