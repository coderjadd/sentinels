// Daily engagement pool
  const POOL = [
    { kind: 'Question of the Day', text: 'What is the difference between vigilance and paranoia, and how can a Sentinel tell when they have crossed from one into the other?' },
    { kind: 'Fact of the Day', text: 'The Sentinel branch of the Jedi Order was historically associated with technology, infiltration, and investigation — the work that did not always demand a lightsaber, and rarely demanded one first.' },
    { kind: 'Question of the Day', text: 'A trainee asks why grammar matters in-game. Give the answer in one sentence — the kind you would actually say at a training.' },
    { kind: 'Fact of the Day', text: "Bastila Shan was a Sentinel before she was anything else. Her line — blink once for dark side, twice for light — is still recited at Sentinel patrols." },
    { kind: 'Question of the Day', text: 'You see a fellow Sentinel break the Charter at a quiet moment, with no-one else watching. What do you do, and in what order?' },
    { kind: 'Fact of the Day', text: 'The Sentinel Pathway runs three training types: Combat, Law, and General. Every rank past Pledge requires passes across all three.' },
    { kind: 'Question of the Day', text: 'Of the three disciplines — Combat, Law, General — which do you find easiest, and which has taught you the most? They are rarely the same answer.' },
    { kind: 'Fact of the Day', text: 'The Council of Reconciliation Oversight appoints the Sentinel Overseer. The seat is conferred, not elected, and may be reconferred.' },
    { kind: 'Question of the Day', text: 'What is the smallest possible action that would get a new Pledge to read the Handbook? You may not say "tell them to."' },
    { kind: 'Fact of the Day', text: 'Master Tera Sinube held that "the value of moving slowly is that one can always clearly see the way ahead." The Investigators take it as their working principle.' },
    { kind: 'Question of the Day', text: 'A patrol ends with nothing to report. Was it a wasted patrol? Defend your answer.' },
    { kind: 'Fact of the Day', text: 'The Sentinel Master rank is conferred jointly. Neither the Overseer nor the Grand Marshal can confer it alone — the requirement is structural, not ceremonial.' },
    { kind: 'Question of the Day', text: 'Composure is named in the Charter as a Sentinel virtue. Name one thing that breaks yours, and one thing you have learned to do about it.' },
    { kind: 'Fact of the Day', text: 'The two-attempt limit on the Handbook Quiz exists to ensure the document is read, not memorised. A Sentinel who has read it once will pass.' },
    { kind: 'Question of the Day', text: "You are asked to host a training with five minutes' notice. What do you teach, and why that?" },
    { kind: 'Fact of the Day', text: 'Temple Guardians are exempt from the two-week Acolyte deadline and from the Advanced Jedi Knight Trials — a recognition of prior service.' },
    { kind: 'Question of the Day', text: 'Describe the difference between obedience to a senior and obedience to the Code, in cases where they appear to disagree.' },
    { kind: 'Fact of the Day', text: 'There are two ways into the Investigators: scheduled tryouts, and a standing application form. The Investigators do not maintain a public Discord invite of their own.' },
    { kind: 'Question of the Day', text: 'A Pledge has done everything correctly for a week and is being ignored by the higher ranks. What, if anything, has gone wrong?' },
    { kind: 'Fact of the Day', text: 'Both attending and hosting trainings yield ten Sentinel Honor per session. The rates are equal on purpose — being present is valued at least as much as running the room.' },
    { kind: 'Question of the Day', text: 'Sentinel Honor cannot be transferred between members. Why do you think the Pathway holds to this rule so firmly?' }
  ];

  function dayOfYear(d) {
    d = d || new Date();
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = (d - start) + ((start.getTimezoneOffset() - d.getTimezoneOffset()) * 60 * 1000);
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  function formatDate(d) {
    d = d || new Date();
    const m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return String(d.getDate()).padStart(2,'0') + ' ' + m[d.getMonth()] + ' ' + d.getFullYear();
  }

  function renderDaily() {
    const e = POOL[dayOfYear() % POOL.length];
    const d = formatDate();
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('dailyDate', d);
    set('dailyKind', '· ' + e.kind + ' ·');
    set('dailyText', '"' + e.text + '"');
  }

  renderDaily();
