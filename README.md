# GitPub
## About
A service to allow anonymous PubSubHubbub compliant subscriptions to GitHub repos.

## Why
GitHub allows you to create WebHooks for your repo but you need to be a contributor to that repo and it is not fully [PubSubHubbub compliant](https://pubsubhubbub.googlecode.com/git/pubsubhubbub-core-0.4.html) -- GitHub does not verify the subscription.
GitPub makes use of GitHub's WebHooks service to listen for push requests on subscribed repos and then publishes them to its own subscribers.

## License
![alt text](https://www.gnu.org/graphics/agplv3-88x31.png "AGPLv3")

Copyright © 2013, The Free Server Project

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
