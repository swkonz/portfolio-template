# portfolio-template

A portfolio app written in reach

# Development

## Setting up development

This app was built without ever having to install npm, node, or any of their dependencies locally. Instead, the app was built using docker compose to initialize and run the app.

### Development Gotchas

When writing files to a host machine using docker, the generated files will have the same permissions as the docker user group on your machine. This can be problematic when working in a larger repository where you might need to access files created within the docker image, but need root access for them (since most docker installations provide the docker group root access). On my local machine, my docker user group has access via my user account, so the files I create within docker have the same permissions as my personal user account.

Another gotcha is the application port. Since react apps use port 3000 by default during development, I opened port 3000 between the docker-compose image and the host. It would likely be a bit cleaner to set the port number in the docker compose and pass that number into the docker image

### Running one off commands

I found it was useful when starting out to run commands within a docker container, with their results recorded to the folder on my local machine using a volume

`docker-compose run app <command name>`

### Creating the app

In order to bootstrap the app without installing npm, I used the following steps:

1. Start a docker-compose session with a bash terminal with the command `docker-compose run app sh`. The `docker-compose.yaml` I used here worked fine for me
2. Bootstrap the app using create react app with the command: `npx create-react-app app`
3. Since I set the working_dir to `/app` in `docker-compose.yaml`, I then copied all the created app files to the app working directory with `mv app/* ./`. Of course, you could also just bootstrap the app from the root directory, or have the app sit deeper in your repo tree. I prefer to have the root of my web app at the root of my repo for a simple site like this.

### Design Choices

- I chose to extract all non-generic site text to a single JSON file in order to make reuse easier. I plan on building a portfolio for some friends, and I wanted an easy way for them to populate the text of the site without having to dig through the code.
