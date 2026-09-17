# Information
This is the frontend website repository for the **Cloud Resume Challenge**. Please check out the [main repo](https://github.com/PolarisKnight/cloud-resume-challenge) for the backend code and more information.

## Decision Regarding counter.js
If you take a look at `counter.js`, you will notice that there is an 'if' statement I created. The visitor counter will only increase once per 8-hour window if you are accessing from the same web browser by using localStorage. It is not perfect, but it is a simple and effective way to prevent simple page refreshes from making the counter go up.