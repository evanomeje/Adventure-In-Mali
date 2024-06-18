document.addEventListener('DOMContentLoaded', () => {
    const elementCombination = {
        "EarthWater": "Mud",
        "WaterEarth": "Mud",
        "AirFire": "Smoke",
        "FireAir": "Smoke",
        "EarthAir": "Dust",
        "AirEarth": "Dust",
        "FireWater": "Steam",
        "WaterFire": "Steam",
        "EarthFire": "Lava",
        "FireEarth": "Lava",
        "LavaWater": "Obsidian",
        "WaterLava": "Obsidian",
        "LavaAir": "Stone",
        "AirLava": "Stone",
        "MudFire": "Brick",
        "FireMud": "Brick",
        "BrickBrick": "Wall",
        "SteamAir": "Cloud",
        "AirSteam": "Cloud",
        "DustFire": "GunPowder",
        "FireDust": "GunPowder"
    };

    const createdElements = ["Earth", "Water", "Air", "Fire"];
    const resultDiv = document.getElementById('result');
    let selectedElement1 = null;

    document.querySelectorAll('.element').forEach(el => {
        el.addEventListener('dragstart', handleDragStart);
    });

    const dropZone = document.getElementById('dropZone');
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleDrop);

    function handleDragStart(e) {
        selectedElement1 = e.target.closest('.element').getAttribute('data-element');
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        if (!selectedElement1) return;

        const selectedElement2 = e.target.closest('.element') ? e.target.closest('.element').getAttribute('data-element') : null;
        if (selectedElement2) {
            const combinationKey = selectedElement1 + selectedElement2;
            if (elementCombination[combinationKey]) {
                const newElement = elementCombination[combinationKey];
                resultDiv.textContent = `You combined ${selectedElement1} and ${selectedElement2} to create ${newElement}`;

                if (!createdElements.includes(newElement)) {
                    createdElements.push(newElement);
                    const newElementDiv = document.createElement('div');
                    newElementDiv.className = 'element';
                    newElementDiv.setAttribute('draggable', true);
                    newElementDiv.setAttribute('data-element', newElement);

                    const newImg = document.createElement('img');
                    newImg.src = `images/${newElement.toLowerCase()}.jpg`;
                    newImg.alt = newElement;
                    newElementDiv.appendChild(newImg);

                    const newText = document.createElement('div');
                    newText.textContent = newElement;
                    newElementDiv.appendChild(newText);

                    newElementDiv.addEventListener('dragstart', handleDragStart);
                    document.getElementById('createdElements').appendChild(newElementDiv);
                }

                if (newElement === "Obsidian") {
                    alert("You've created Obsidian and unlocked the portal to the hidden chamber of the Golden Scepter!");
                }
            } else {
                resultDiv.textContent = "Invalid combination. Try again!";
            }
            selectedElement1 = null;
        }
    }

    function makeDraggable(img) {
        img.onmousedown = function(event) {
            let shiftX = event.clientX - img.getBoundingClientRect().left;
            let shiftY = event.clientY - img.getBoundingClientRect().top;

            img.style.position = 'absolute';
            img.style.zIndex = 1000;
            document.body.append(img);

            moveAt(event.pageX, event.pageY);

            function moveAt(pageX, pageY) {
                img.style.left = pageX - shiftX + 'px';
                img.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            img.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                img.onmouseup = null;
            };

            img.ondragstart = function() {
                return false;
            };
        };

        img.ondragstart = function() {
            return false;
        };
    }

    const images = document.querySelectorAll('.draggable-image');
    images.forEach(img => makeDraggable(img));
});
