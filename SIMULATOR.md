# Simulator instructions

You have been tasked to design and build an upload manager. For project setup instructions see the [README.md](README.md).

---

## Parts

The simulator consists of two parts: an upload page and a queue page.

### Upload page

Requirements:
* As a user, I wish to select one or more files to upload
* As a user, I wish to confirm the selected files before starting the upload

### Queue page

Requirements:
* As a user, I wish to see a list of files that are either uploading, have uploaded successfully, or failed to upload
* As a user, I wish to see the name, size, and state of every upload in the list

### Unit testing

We expect for the solution to these requirements to have some degree of test coverage.

---
## Boilerplate

### Upload library

The pre-built `upload` function in `lib/upload` is to be used to upload the files. The files are dumped in a AWS S3 bucket but you do not need to worry about that. The `upload` function is ready to be used to upload a file.

Additionally, a set of sample files are available for use in the `assets` directory.

### React components

The boilerplate necessary for these pages is already provided for you if you choose to use React to solve this simulation.

Additionally, the `semantic-ui-react` component library is available for you to use. Look into the [library's documentation](https://react.semantic-ui.com/) for a list of the available components.

To use these components simply import them from the `semantic-ui-react` package.

```jsx
import { Header, Grid, Button } from 'semantic-ui-react`;
```

A pre-built `FileInput` component is available for use in the `components` directory.

## Closing words
The simulator is designed so that it can be completed in ~4 hours of solid work assuming you choose to use React. As mentioned in the setup document, you are allowed to skip React and use a library of your choice. We can only provide boilerplate for a React solution but encourage you to use tools similar to Create React App to get up and running as quickly as possible. We are aware that not using React may take more time given the lack of boilerplate.

We will test and review the solution upon completion. We're more interested in understanding the reasoning behind the decisions and trade-offs of the overall solution than we are in seeing a completely polished solution. An accompanying document briefly summarizing your thoughts would be a welcomed addition (think of it as a pull request description).

**Thank you for your time and good luck!**