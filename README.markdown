# Cron

## Use

Adds a simple cron interface to meteor. I'm fairly sure there is a better way to do this, but this works.

```js
  var MyCron = new Cron();
  
  // this job will happen every 1 second
  MyCron.addJob(1, function() {
    console.log('tick');
  });
```

## Install

Use [meteorite](http://oortcloud.github.com/meteorite/):

Then add via:

```bash
mrt add cron
```

