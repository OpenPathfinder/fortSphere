![Logo for FORTSPHERE featuring a cat in a gold astronaut helmet surrounded by rays and a planet above, alongside the text 'FORTSPHERE' and the tagline 'Fortify your digital sphere, one command at a time' in gold gradient on a black background.](https://raw.githubusercontent.com/OpenPathfinder/branding/refs/heads/main/fortSphere/variation_header.png)

# fortSphere

Fortify your Digital Sphere, once command at a time

---


## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [Version Command](#version-command)
  - [Policy Management Command](#policy-management-command)
  - [GitHub Tokens](#github-tokens)
- [Policies](#policies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

fortSphere is a tool designed to help you manage and fortify your digital sphere by applying various policies to your GitHub organization.

## Installation

To install fortSphere, clone the repository and install the dependencies:

```sh
git clone https://github.com/OpenPathfinder/fortSphere.git
cd fortsphere
npm install
```

## Usage

### Version Command

Display the current version of fortSphere:

```bash
node fortsphere.js version
```

### Policy Management Command

Manage policies for your GitHub organization:

- List all available policies:
    ```bash
    node fortsphere.js policy --list
    ```
- Apply a policy to a GitHub organization:
    ```bash
    node fortsphere.js policy --apply <policy> --github-org <githubOrg>
    ```

### GitHub Tokens

To run this application, you need a GitHub token with `admin:write` permissions.

#### Injecting the Token

- Use an environment variable named `GITHUB_TOKEN` to supply the token.
- Alternatively, you can use a `.env` file and load it with the command `node --env-file=.env fortsphere.js policy --apply <policy> --github-org <githubOrg>`

## Policies

fortSphere includes the following policies:

- **restrictRepoCreationGitHub**: This policy is designed to prevent members of a GitHub organization from creating new repositories. This includes public and private repositories. This policy will set the following values for the organization(`members_allowed_repository_creation_type=none`, `members_can_create_public_repositories=false`, `members_can_create_private_repositories=false`) at the organization level.

## Contributing

Contributions are welcome! Please read the contributing guidelines first.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.