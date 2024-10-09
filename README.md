# LibraryUI - Cross-Application Components

Welcome to the `library` repository! This repository is part of an example in my blog post [Share React Components Across Projects with Git Submodules](https://formfusion.dev/blog/2023/05/sharing-react-components-across) showcasing how to share code between different Git repositories. It specifically contains the implementation of a reusable `Button` component that is used across multiple projects.

The main goal of this repository is to provide an example of how Git submodules can be leveraged to share React components (or other pieces of code) across multiple repositories, ensuring reusability and consistency.

**Demo**: https://library-smitevskas-projects.vercel.app/

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Installation](#installation)
- [Component Details](#component-details)
- [Repositories Using This Library](#repositories-using-this-library)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository hosts the source code for a customizable `Button` component, written in React, which is used by multiple projects. The button is designed to be easily styled and configured according to the needs of different applications. 

This repository uses **Parcel** as its build tool, which simplifies the development process by providing fast bundling and live reloading. With Parcel, you can quickly set up and run the project without complex configuration, making it easier to focus on building the shared components.

By keeping shared components in their own repository, we can:
- Maintain a single source of truth for the components.
- Share them across multiple projects.
- Ensure consistency and reduce code duplication.
- Build and test components independently, allowing for easier development and debugging without impacting other projects.

## Usage

### Option 1: Fork This Repository

If you'd like to customize this `Button` component or extend the library further, you can fork this repository and maintain your own version.

1. **Fork the repository**:
    - Visit the repository page on GitHub.
    - Click the "Fork" button in the top-right corner to create a copy of this repository under your GitHub account.

2. **Clone the forked repository**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/library.git
    ```

3. **Make changes and push updates** to your forked repository:
    - Customize the `Button` component as needed.
    - Push your changes back to your forked repository.

4. **Add the forked repository as a submodule** in another project where you want to use the shared component.

### Option 2: Create Your Own Library Repository

If you prefer to create your own shared component library from scratch, follow these steps:

1. **Create a new repository** on GitHub for your shared library.
2. **Set up the project structure**:
    - Initialize a new project and install the necessary dependencies (e.g., React).
    ```bash
    mkdir my-shared-library
    cd my-shared-library
    npm init -y
    npm install react
    ```

3. **Write your component**:
    - Create your reusable components (e.g., `Button.js`) in the library.
    ```javascript
    // Button.js
    import React from 'react';

    const Button = ({ label, onClick, color, size, disabled }) => (
        <button 
            onClick={onClick} 
            className={`btn-${color} btn-${size}`} 
            disabled={disabled}
        >
            {label}
        </button>
    );

    export default Button;
    ```

4. **Publish the library**:
    - You can either keep the library private on GitHub or publish it to a package registry (e.g., npm).
    - If you keep it on GitHub, follow the submodule approach in [Option 2](#option-2-create-your-own-library-repository).

5. **Use your library in other projects**:
    - Either add it as a Git submodule or install it as a package if published to npm.

By following any of these options, you'll be able to use a shared `Button` component in multiple projects, either by forking this repository or creating your own library from scratch.


## Installation

If you want to clone this repository locally to play around with the `Button` component, experiment with its features and see how it looks in action, follow the installation steps below.

1. **Clone the repository**:
    ```bash
    git clone https://github.com/mitevskasara/library.git
    ```

2. **Install dependencies**:
    Navigate to the project directory and run:
    ```bash
    npm install
    ```

3. **Start the app**:
    Navigate to the project directory and run:
    ```bash
    npm start
    ```
  Navigate to http://localhost:1234

## Component details

The `Button` component accepts the following props:

| Prop        | Type      | Default    | Required | Description                                                           |
|-------------|-----------|------------|----------|-----------------------------------------------------------------------|
| `children`  | `node`    | `null`     | Yes      | Content inside the button (usually text or elements).                 |
| `variant`   | `string`  | `'primary'`| No       | The visual style of the button (`primary`, `secondary`, etc.).         |
| `className` | `string`  | `''`       | No       | Additional class names for custom styling.                            |
| `loading`   | `boolean` | `false`    | No       | Shows a loader next to the button if `true`. Disables the button too.  |
| `size`      | `string`  | `'medium'` | No       | Button size (`small`, `medium`, `large`).                             |
| `disabled`  | `boolean` | `false`    | No       | Disables the button if `true`. Also disabled when `loading` is `true`. |

### Example Usage

```javascript
<Button 
    variant="secondary" 
    size="large" 
    loading={true} 
    disabled={false}
>
    Submit
</Button>
```

## Repositories Using This Library

The following repositories incorporate this library as a Git submodule. For more details and instructions, please refer to their README files.

- [first-app](https://github.com/mitevskasara/first-app)
- [second-app](https://github.com/mitevskasara/second-app)

## Contributing

We welcome contributions! If you'd like to contribute to this project, please open an issue or submit a pull request. Make sure your PR includes relevant documentation updates if necessary.
