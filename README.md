# cron-tick

**NOTE**: This package is very simple and rudimentary. For a more robust solution, please see: https://github.com/percolatestudio/meteor-synced-cron

## Use

Adds a very simple cron-like mechanism to meteor. I'm fairly sure there 
s a better way to do this, but this works.

```js
  var MyCron = new Cron(/* interval in milliseconds, defaults to 60000 (1 minute) */);
  
  // 5 is the number of intervals between invoking the job
  // so this job will happen once every 5 minute
  MyCron.addJob(5, function() {
    console.log('tick');
  });
```

The job will be called first after the specified number of intervals has passed.

You can also schedule jobs to trigger based on timing. You should note that if the time that you schedule happens before a tick it will get delayed until the tick happens.

```js
  var MyCron = new Cron(1000);

  //Get the current unix time in seconds
  var ts = Math.round((new Date()).getTime() / 1000);

  //This job will get called once after 5 second
  MyCron.addScheduleJob(ts + 5, function() {
  	console.log('schedule tick');
  });
```

You can also use this trick to create something amazing.

```js
  var MyCron = new Cron(100);

  //Get the current unix time in seconds
  var ts = Math.round((new Date()).getTime() / 1000);

  //The recursive function
  var recur = function() {

  	//Get the current unix time in seconds
  	var ts = Math.round((new Date()).getTime() / 1000);

  	//Getting a random number
  	var ran = Math.round(Math.random()*10)

  	console.log('schedule tick. I will get called again in ' + ran + ' second(s)');

  	//Create a new schedule before the old one gets deleted
  	MyCron.addScheduleJob(ts + ran, recur);
  };

  //Call the recursive function for the first time
  recur();
```

## Install

Use [meteorite](http://oortcloud.github.com/meteorite/):

Then add via:

```bash
mrt add cron-tick
```

