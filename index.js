/**
 * Soooooo this is just a placeholder site. I probably wouldn't do things
 * this way IRL, but I have one day and just want to post something. Hopefully
 * you have a sense of humor about this stuff. 😀
 */
(function() {
    /**
     * Toggle the display of the modal content. This is very tightly
     * coupled to the content of the page. Sorry. See the disclaimer
     * above. I'm not trying to have a reusable modal component here.
     */
    function toggleModal() {
        let modal = document.getElementById('modal-menu');
        if (!modal) {
            console.warn("Welp, that's weird. Missing modal content.");
            return;
        }

        if (modal.classList.contains('closed')) {
            modal.classList.replace('closed', 'open');
        } else {
            modal.classList.replace('open', 'closed');
        }
    }

    /**
     * Bind clicks on the menu button to the toggle modal function.
     */
    const menuButton = document.getElementById('main-menu-button');
    if (menuButton) {
        menuButton.onclick = function() {
            // Fetch the modal that whose display want to toggle.
            toggleModal();
        };
    }

    /**
     * Bind clicks on the modal close button to the toggle function.
     */
    const modalCloseButton = document.getElementById('modal-menu-close');
    if (modalCloseButton) {
        modalCloseButton.onclick = function() {
            toggleModal();
        };
    }

    /**
     * Winging it here: I want to show a filter-able list of skills.
     * Seems like something we can do in vanilla js pretty easily.
     * Let's find out!
     */

    const categories = {
        frontEnd: 'Front End',
        backEnd: 'Back End',
        embedded: 'Embedded',
        design: 'Design',
        management: 'Management',
        process: 'Process',
        manufacturing: 'Manufacturing',
    };

    const skills = [
        { title: 'React.js', category: categories.frontEnd, start: 2018, last: 2019 },
        { title: 'React Native', category: categories.frontEnd, start: 2017, last: 2019 },
        { title: 'CSS', category: categories.frontEnd, start: 2000, last: 2019 },
        { title: 'SASS/LESS', category: categories.frontEnd, start: 2010, last: 2017 },
        { title: 'Webpack', category: categories.frontEnd, start: 2016, last: 2019 },
        { title: 'npm', category: categories.frontEnd, start: 2016, last: 2019 },
        { title: 'Python', category: categories.backEnd, start: 2017, last: 2019 },
        { title: 'Flask', category: categories.backEnd, start: 2017, last: 2019 },
        { title: 'SQL', category: categories.backEnd, start: 1998, last: 2019 },
        { title: 'PostgreSQL', category: categories.backEnd, start: 2007, last: 2019 },
        { title: 'Database schema', category: categories.backEnd, start: 1998, last: 2019 },
        { title: 'SQS', category: categories.backEnd, start: 2018, last: 2019 },
        { title: 'EC2', category: categories.backEnd, start: 2016, last: 2019 },
        { title: 'ELB', category: categories.backEnd, start: 2017, last: 2019 },
        { title: 'CI/CD', category: categories.process, start: 2016, last: 2019 },
        { title: 'Jira', category: categories.process, start: 2009, last: 2019 },
        { title: 'Trello', category: categories.process, start: 2016, last: 2019 },
        { title: 'Agile', category: categories.management, start: 2008, last: 2019 },
        { title: 'Adobe XD', category: categories.design, start: 2017, last: 2019 },
        { title: 'Adobe Photoshop', category: categories.design, start: 1998, last: 2019 },
        { title: 'Adobe Illustrator', category: categories.design, start: 2002, last: 2019 },
        { title: 'UX', category: categories.design, start: 1998, last: 2019 },
        { title: 'UI', category: categories.design, start: 1998, last: 2019 },
        { title: 'JavaScript', category: categories.frontEnd, start: 2000, last: 2019 },
        { title: 'C++', category: categories.embedded, start: 1998, last: 2019 },
        { title: 'C', category: categories.embedded, start: 1997, last: 2019 },
        { title: 'Embedded Systems', category: categories.embedded, start: 1998, last: 2019 },
        { title: 'Team leadership', category: categories.management, start: 1998, last: 2019 },
        { title: 'Engineering roadmaps', category: categories.management, start: 1998, last: 2019 },
        { title: 'Product Management', category: categories.management, start: 1998, last: 2019 },
        { title: 'Bluetooth', category: categories.embedded, start: 2017, last: 2019 },
        { title: 'Wireless', category: categories.embedded, start: 2005, last: 2019 },
        { title: 'RF', category: categories.embedded, start: 2005, last: 2019 },
        { title: 'DFM', category: categories.manufacturing, start: 2018, last: 2019 },
        { title: 'FMEA', category: categories.manufacturing, start: 2018, last: 2019 },
        { title: 'FAI', category: categories.manufacturing, start: 2018, last: 2019 },
        { title: 'Manufacturing Process', category: categories.manufacturing, start: 2018, last: 2019 },
        { title: 'Manufacturing Fixtures', category: categories.manufacturing, start: 2018, last: 2019 },
        { title: 'SolidWorks modeling', category: categories.design, start: 2018, last: 2019 },
        { title: 'SolidWorks drawings', category: categories.design, start: 2018, last: 2019 },
        { title: 'Patent Process', category: categories.management, start: 2017, last: 2019 },
    ];

    /**
     * Render the skill list as filtered by optional search text provided by user.
     * This is not a good way to do this. It's hitting the DOM with a hammer and will
     * be unacceptably slow for any list that isn't super short.
     * @param {*} search - optional search text provided by user
     */
    function renderSkillList(search) {
        const listResults = document.getElementById('skill-list-results');
        if (listResults) {
            // clear the list
            while (listResults.firstChild) {
                listResults.removeChild(listResults.firstChild);
            }

            // rebuild the list based on current search and filter
            let skillList = '<ul>';
            let matchingSkills = null;
            if (search && search.length > 0) {
                matchingSkills = skills.filter(skill => skill.title.indexOf(search) !== -1);
            } else {
                matchingSkills = skills;
            }
            matchingSkills.forEach(skill => {
                skillList += `<li class="skill">${skill.title}</li>`;
            });
            skillList += '</ul>';
            listResults.innerHTML = skillList;

            const loading = document.getElementById('skill-list-loading');
            if (loading) {
                loading.style.display = 'none';
            }
        }
    }

    // Initial render of the list
    renderSkillList();

    const searchInput = document.getElementById('list-search');
    searchInput.addEventListener('keyup', e => {
        renderSkillList(searchInput.value);
    });
})();
