import { AfterViewInit, Component } from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const options = { duration: 2 };

    const counters = [
      { id: 'experience', endVal: 40 },
      { id: 'hours', endVal: 75000 },
      { id: 'transport', endVal: 1000000 },
      { id: 'revenue', endVal: 20 },
    ];

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => {
            const el = document.getElementById(counter.id);
            if (el && !el.getAttribute('data-started')) {
              const countUp = new CountUp(counter.id, counter.endVal, options);
              if (!countUp.error) {
                countUp.start();
                el.setAttribute('data-started', 'true');
              } else {
                console.error(countUp.error);
              }
            }
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const section = document.querySelector('.grid');
    if (section) observer.observe(section);
  }
}

