FROM node:0.12

# Install gem sass for  grunt-contrib-sass
RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y ruby
RUN gem install sass

WORKDIR /home/app

# Install Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install packages
ADD package.json /home/app/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /home/app/.bowerrc
ADD bower.json /home/app/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/app

# Set development environment as default
ENV NODE_ENV development

# Port 3000 for server
EXPOSE 3000
CMD ["grunt"]
