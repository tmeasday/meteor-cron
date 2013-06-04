// Veeeeeeery simple cron job singleton
// ticks every 1 minute, set a job to go every X ticks.

Cron = function(interval) {
  var self = this;
  
  interval = interval || 60 * 1000;
  
  self._jobs = [];
  self._schedules = [];

  Meteor.setInterval(function() {
    self.tick();
  }, interval)
}

_.extend(Cron.prototype, {
  addJob: function(every_x_ticks, fn) {
    this._jobs.push({fn: fn, every: every_x_ticks, count: 0});
  },

  addScheduleJob: function(unix_time, fn) {
    this._schedules.push({fn: fn, unix_time: unix_time});
  },
  
  tick: function() {
    var self = this;
    
    _.each(self._jobs, function(job) {
      job.count += 1;
      if (job.count === job.every) {
        job.fn();
        job.count = 0;
      }
    });

    _.each(self._schedules, function(job, index) {
      var ts = Math.round((new Date()).getTime() / 1000);

      if (ts >= job.unix_time) {
        job.fn();
        delete self._schedules[index];
      }
    });
  }
})