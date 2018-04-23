import evx from 'eventx-core';

if (!global.evx) global.evx = evx;

evx.setting.resizeObserverFirstRun = true;

evx.createEvent("resize",function(target,callback) {
    var firstrun = true;

    const ro = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.target == target) {
                if (evx.setting.resizeObserverFirstRun) {
                    callback(entry);
                } else {
                    if (!firstrun) {
                        callback(entry);
                    }
                }
                firstrun = false;
            }
        }
    });

    ro.observe(target);

    return function() {
        //ro.unobserve(target);
        ro.disconnect();
    }
});