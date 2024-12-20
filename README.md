![Logo for FORTSPHERE featuring a cat in a gold astronaut helmet surrounded by rays and a planet above, alongside the text 'FORTSPHERE' and the tagline 'Fortify your digital sphere, one command at a time' in gold gradient on a black background.](https://raw.githubusercontent.com/OpenPathfinder/branding/refs/heads/main/fortSphere/variation_header.png)

# fortSphere

Fortify your Digital Sphere, once command at a time

---


## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Installation](#installation)
  - [npm](#npm)
  - [Docker Container](#docker-container)
  - [Source Code](#source-code)
- [Usage](#usage)
  - [Version Command](#version-command)
  - [Policy Management Command](#policy-management-command)
  - [GitHub Tokens](#github-tokens)
- [Policies](#policies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

fortSphere is a CLI tool designed to help you manage and fortify your digital sphere by applying various policies to your GitHub organization(s) and repositories.

## Demo

### Scenario: While the Setup is fine using `restrictRepoCreationGitHub`

**GitHub UI (before)**
![Screenshot from 2024-12-19 02-54-57](https://github.com/user-attachments/assets/c85cad6b-7fc9-4060-a723-8f48be10861a)

**fortSphere run and logs**
![Screenshot from 2024-12-19 02-39-04](https://github.com/user-attachments/assets/fe483669-0228-46b4-8517-091f5f49b558)

---

### Scenario: When the setup requires changes using `restrictRepoCreationGitHub`

**GitHub UI (before)**
![Screenshot from 2024-12-19 02-55-14](https://github.com/user-attachments/assets/8c92af79-ca25-473c-ad32-45e08157e6a6)

**fortSphere run and logs**
![Screenshot from 2024-12-19 02-41-00](https://github.com/user-attachments/assets/59470423-2fad-4963-bf49-8d86118501ed)

---

## Installation

### npm

You can install it globally:

```bash
npm i -g fortsphere
fortsphere version
```

You can use it as `npx`:

```bash
npx fortsphere version
```

### Docker container

You can use Docker:

```bash
docker pull ghcr.io/openpathfinder/fortsphere:latest
docker run --rm ghcr.io/openpathfinder/fortsphere:latest version
```

You can create an alias like `alias fortsphere="docker run --rm ghcr.io/openpathfinder/fortsphere:latest"`

### Source Code
To install fortSphere, clone the repository and install the dependencies:

```sh
git clone https://github.com/OpenPathfinder/fortSphere.git
cd fortsphere
npm install
```

You can create an alias like `alias fortsphere="node fortsphere.js"`

## Usage


### Version Command

Display the current version of fortSphere:

```bash
fortsphere version
```

### Policy Management Command

Manage policies for your GitHub organization:

- List all available policies:
    ```bash
    fortsphere policy --list
    ```
- Apply a policy to a GitHub organization:
    ```bash
    fortsphere policy --apply <policy> --github-org <githubOrg>
    ```

### GitHub Tokens

To run this application, you need a GitHub token with `admin:write` permissions.

#### Injecting the Token

- Use an environment variable named `GITHUB_TOKEN` to supply the token.
- Alternatively, you can use a `.env` file and load it with the command `node --env-file=.env fortsphere.js policy --apply <policy> --github-org <githubOrg>` when doing local development
- While using docker images you can use `docker run --rm -e GITHUB_TOKEN=mytoken ghcr.io/openpathfinder/fortsphere:latest policy --apply <policy> --github-org <githubOrg>`

## Policies

fortSphere includes the following policies:

- **restrictRepoCreationGitHub**: This policy is designed to prevent members of a GitHub organization from creating new repositories. This includes public and private repositories. This policy will set the following values for the organization(`members_allowed_repository_creation_type=none`, `members_can_create_public_repositories=false`, `members_can_create_private_repositories=false`) at the organization level.

## Contributing

Contributions are welcome! Please read the contributing guidelines first.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
