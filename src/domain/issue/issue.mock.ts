import { userMock1, userMock2, usersMock } from "@domain/user";
import {
  commentMock1,
  commentMock2,
  commentMock3,
  commentMock4,
  commentMock5,
} from "@domain/comment";
import { priorityLow, priorityMedium, priorityHigh } from "@domain/priority";
import { Issue } from "./issue";

const createdAt = new Date("2022-01-18 11:00").valueOf();

// PROJECT 1
export const todoIssuesMock1: Issue[] = [];

export const inProgressIssuesMock1: Issue[] = [
  {
    id: "ea07f7ca-13e9-4143-b623-f5713adef81a",
    name: "User Registration Bug",
    description:
      "Users are unable to register on the website due to a bug in the registration process. Investigate and fix the issue.",
    reporter: userMock1, // Daniel Serrano
    asignee: userMock2, // Woody
    comments: [],
    priority: priorityHigh,
    categoryType: "TODO",
    createdAt,
    updatedAt: createdAt,
  },
  {
    id: "23717058-379a-447a-a215-e425a124154f",
    name: "Enhance Search Functionality",
    description:
      "Improve the search feature to allow users to filter and find information more efficiently. Consider adding advanced search options and keyword highlighting.",
    reporter: userMock2, // Woody
    asignee: usersMock[2], // Buzz Lightyear
    comments: [commentMock1, commentMock2],
    priority: priorityHigh,
    categoryType: "TODO",
    createdAt,
    updatedAt: new Date("2022-01-23 17:50").valueOf(),
  },
];

export const doneIssuesMock1: Issue[] = [
  {
    id: "cb3eb5e6-299d-4e1a-8521-a5541f8403e4",
    name: "Performance Optimization for Dashboard",
    description:
      "The dashboard is slow to load, affecting user experience. Identify and implement performance optimizations to ensure quicker loading times.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityLow,
    categoryType: "TODO",
    createdAt,
    updatedAt: new Date("2022-01-23 10:51").valueOf(),
  },
  {
    id: "8264e3fc-dd97-4abe-9612-deee6472e5c4",
    name: "Implement Two-Factor Authentication",
    description:
      'Strengthen security by adding two-factor authentication (2FA) for user accounts. Research and implement a secure 2FA solution.',
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock3],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt,
    updatedAt: new Date("2022-01-23 02:04").valueOf(),
  },
  {
    id: "4db55cbf-222d-424a-b23b-08e61534c706",
    name: "Update Third-Party Libraries",
    description:
      'Some third-party libraries used in the project are outdated. Update them to the latest versions to benefit from bug fixes and new features.',
    reporter: userMock1,
    asignee: userMock1,
    comments: [commentMock4, commentMock5],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt,
    updatedAt: new Date("2022-01-23 15:28").valueOf(),
  },
];

// PROJECT 2
export const todoIssuesMock2: Issue[] = [
  {
    id: "f3efefcf-7859-4241-8b03-4ae815183355",
    name: "Responsive Design for Mobile",
    description:
      "Ensure that the application is fully responsive on mobile devices. Test and fix any layout or functionality issues on different screen sizes.",
    reporter: userMock1,
    asignee: userMock2,
    comments: [],
    priority: priorityMedium,
    categoryType: "TODO",
    createdAt,
    updatedAt: new Date("2022-01-18 11:01").valueOf(),
  },
  {
    id: "6bf6a1f4-20bb-492b-8ea4-4aa18efeb062",
    name: "Email Notification Configuration",
    description:
      "Users are not receiving email notifications for important events. Review and configure email notification settings to ensure users are appropriately informed.",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityLow,
    categoryType: "TODO",
    createdAt,
    updatedAt: new Date("2022-01-23 14:28").valueOf(),
  },
];

export const inProgressIssuesMock2: Issue[] = [
  {
    id: "812664aa-82be-418b-9ba3-1d7acdcd6be2",
    name: "Add dark mode",
    description: "",
    reporter: userMock1,
    asignee: userMock1,
    comments: [],
    priority: priorityHigh,
    categoryType: "IN_PROGRESS",
    createdAt,
    updatedAt: createdAt,
  },
];

export const doneIssuesMock2: Issue[] = [];

export const defaultIssuesIds = [
  todoIssuesMock1,
  inProgressIssuesMock1,
  doneIssuesMock1,
  todoIssuesMock2,
  inProgressIssuesMock2,
  doneIssuesMock2,
]
  .flat()
  .map((issue) => issue.id);
