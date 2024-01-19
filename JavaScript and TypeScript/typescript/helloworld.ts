
import { getCount, setCount } from './store.js';
import { getCookie, removeCookie, setCookie } from './node_modules/typescript-cookie/index.js';

class Timer {
    hourInput: HTMLInputElement | null;
    minInput: HTMLInputElement | null;
    secInput: HTMLInputElement | null;
    startButton: HTMLElement | null;
    pauseButton: HTMLElement | null;
    resetButton: HTMLElement | null;
    display: HTMLElement | null;
    interval: number | null;
    total: number;
    total1: number;
    starttimes: string | null;
    
  
    constructor() {
      this.hourInput = document.getElementById('hour') as HTMLInputElement;
      this.minInput = document.getElementById('min') as HTMLInputElement;
      this.secInput = document.getElementById('sec') as HTMLInputElement;
      this.startButton = document.getElementById('start');
      this.pauseButton = document.getElementById('pause');
      this.resetButton = document.getElementById('reset');
      this.display = document.getElementById('disp');
  
      this.interval = null;
      this.total = 0;
      this.total1 = 0;
      this.starttimes = null;
     
      this.updateLogList();
      this.init();
    }
  
    
  
    TimerLogic(): void {
        this.total = Number(this.hourInput.value) * 3600 + Number(this.minInput.value) * 60 + Number(this.secInput.value);
      this.total--;
  
      if (this.total >= 0) {
        const hr = Math.floor(this.total / 3600);
        const m = Math.floor((this.total / 60) - (hr * 60));
        const sc = this.total - ((hr * 3600) + (m * 60));
  
        this.hourInput.value = `${hr}`;
        this.minInput.value = `${m}`;
        this.secInput.value = `${sc}`;
      } else {
        this.display.innerText = "Time over";
  
        const newDate = new Date();
        clearInterval(this.interval);
        var hr1=Math.floor(this.total1/3600);
         console.log(this.total1);
        var m1=Math.floor((this.total1/60 )- (hr1*60));
        var sc1=this.total1-((hr1*3600)+(m1*60));
  
        const log = {
          startTime: this.starttimes,
          duration: `${hr1}:${m1}:${sc1}`,
          endTime: newDate.toLocaleString()
        };
        this.total1=0;
  
        const existingLogs = JSON.parse(localStorage.getItem('logs')) || [];
        existingLogs.push(log);
        localStorage.setItem('logs', JSON.stringify(existingLogs));
        this.updateLogList();
      }
    }
  
    updateLogList(): void {
      const logListElement = document.getElementById('inp-group');
      logListElement.innerHTML = '';
  
      const logs = JSON.parse(localStorage.getItem('logs')) || [];
  
      logs.forEach((log: any) => {
        const logContainer = document.createElement('div');
        logContainer.classList.add('log-item');
  
        const StartTimeElement = document.createElement('div');
        StartTimeElement.classList.add('startTime');
        StartTimeElement.textContent = log.startTime;
  
        const durationElement = document.createElement('div');
        durationElement.classList.add('duration');
        durationElement.textContent = log.duration;
  
        const endTimeElement = document.createElement('div');
        endTimeElement.classList.add('endTime');
        endTimeElement.textContent = log.endTime;
  
        const setButton = document.createElement('button');
        setButton.classList.add('set-button');
        setButton.textContent = 'Reload Logs';
        
        let [hours, minutes, seconds] = log.duration.split(':').map(Number);
        setButton.addEventListener('click', () => {
          if (this.total1 === 0) {
            this.hourInput.value = hours;
            this.minInput.value = minutes;
            this.secInput.value = seconds;
            
            let clickCount :number= getCount();

            // Function to update the display and local storage on button click
            function handleClick() {
              clickCount++;
              setCount(clickCount);
              console.log(`Reload button has been clicked ${clickCount} times`);

              
              let value=parseInt(getCookie('count'))>0?parseInt(getCookie('count')):0;
              value++;
              removeCookie('count');
              setCookie('count', `${value}`);
            }
            handleClick();
          }
        });
  
        logContainer.appendChild(StartTimeElement);
        logContainer.appendChild(durationElement);
        logContainer.appendChild(endTimeElement);
        logContainer.appendChild(setButton);
  
        logListElement.appendChild(logContainer);
      });
    }
  
    init(): void {
      this.startButton?.addEventListener('click', () => {
        this.total = Number(this.hourInput!.value) * 3600 + Number(this.minInput!.value) * 60 + Number(this.secInput!.value);
        this.total1=this.total;
        if (this.total === 0) {
          return;
        }
  
        clearInterval(this.interval!);
        this.interval = setInterval(() => this.TimerLogic(), 1000);
        this.display!.innerText = "Countdown Started";
  
        const newDate = new Date();
        this.starttimes = newDate.toLocaleString();
  
        window.onbeforeunload = () => "Are you sure you want to exit?";
      });
  
      this.pauseButton?.addEventListener('click', () => {
        clearInterval(this.interval!);
      });
  
      this.resetButton?.addEventListener('click', () => {
        clearInterval(this.interval!);
        this.display!.innerText = "Timer";
  
        if (this.hourInput!.value === "0" && this.minInput!.value === "0" && this.secInput!.value === "0") {
          return;
        }
        var hr1=Math.floor(this.total1/3600);
         console.log(this.total1);
        var m1=Math.floor((this.total1/60 )- (hr1*60));
        var sc1=this.total1-((hr1*3600)+(m1*60));
  
        this.hourInput!.value = "0";
        this.minInput!.value = "0";
        this.secInput!.value = "0";
  
        this.total1 = 0;
  
        const newDate = new Date();
        console.log(`${hr1}:${m1}:${sc1}`)
        const log = {
          startTime: this.starttimes,
          duration: `${hr1}:${m1}:${sc1}`,
          endTime: "Not completed"
        };
  
        const existingLogs = JSON.parse(localStorage.getItem('logs')) || [];
        existingLogs.push(log);
        localStorage.setItem('logs', JSON.stringify(existingLogs));
        this.updateLogList();
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new Timer();
  });
  