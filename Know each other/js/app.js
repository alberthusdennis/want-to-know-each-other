/* =========================================================
   STATE APLIKASI
========================================================= */

const state = {
    mode: "all",
    selectedCategories: [],
    deck: [],
    history: [],
    currentQuestion: null,
    seenCount: 0,
    currentTurn: "Dennis",
    favorites: []
};


/* =========================================================
   REFERENSI ELEMEN
========================================================= */

const screens = {
    home: document.getElementById("homeScreen"),
    mode: document.getElementById("modeScreen"),
    game: document.getElementById("gameScreen"),
    finish: document.getElementById("finishScreen")
};

const startButton = document.getElementById("startButton");
const playButton = document.getElementById("playButton");

const categoryGrid = document.getElementById("categoryGrid");
const categorySection = document.getElementById("categorySection");

const modeButtons = document.querySelectorAll(".mode-option");

const questionContent = document.getElementById("questionContent");
const drawButton = document.getElementById("drawButton");
const skipButton = document.getElementById("skipButton");
const previousButton = document.getElementById("previousButton");
const favoriteButton = document.getElementById("favoriteButton");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const modeText = document.getElementById("modeText");

const turnIndicator = document.getElementById("turnIndicator");
const swapTurnButton = document.getElementById("swapTurnButton");

const favoritePanel = document.getElementById("favoritePanel");
const favoritePanelButton = document.getElementById("favoritePanelButton");
const closeFavoritePanel = document.getElementById("closeFavoritePanel");
const favoriteList = document.getElementById("favoriteList");

const restartButton = document.getElementById("restartButton");
const backToModeButton = document.getElementById("backToModeButton");

// Elemen catatan jawaban
const noteArea = document.getElementById("noteArea");
const noteDennis = document.getElementById("noteDennis");
const noteYohana = document.getElementById("noteYohana");
const saveNoteButton = document.getElementById("saveNoteButton");
const toggleNoteButton = document.getElementById("toggleNoteButton");
const clearNoteButton = document.getElementById("clearNoteButton");


/* =========================================================
   UTILITAS
========================================================= */

function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove("active");
    });
    screens[screenName].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleTurn() {
    state.currentTurn = state.currentTurn === "Dennis" ? "Yohana" : "Dennis";
    updateTurn();
}

function updateTurn() {
    turnIndicator.textContent = `Giliran ${state.currentTurn} 🎤`;
}

function getCategories() {
    return [...new Set(finalQuestions.map(q => q.category))];
}

function getModeLabel() {
    if (state.mode === "all") return "Semua";
    if (state.mode === "random") return "Acak";
    return "Kategori";
}


/* =========================================================
   RENDER KATEGORI
========================================================= */

function renderCategories() {
    const categories = getCategories();
    categoryGrid.innerHTML = categories.map(category => `
        <div class="category-option">
            <input type="checkbox" id="${slugify(category)}" value="${category}">
            <label for="${slugify(category)}">${category}</label>
        </div>
    `).join("");

    categoryGrid.querySelectorAll("input[type='checkbox']").forEach(input => {
        input.addEventListener("change", () => {
            state.selectedCategories = [...categoryGrid.querySelectorAll("input:checked")].map(item => item.value);
        });
    });
}

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}


/* =========================================================
   MODE SELECTION
========================================================= */

modeButtons.forEach(button => {
    button.addEventListener("click", () => {
        state.mode = button.dataset.mode;
        modeButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        categorySection.style.display = state.mode === "category" ? "block" : "none";
    });
});


/* =========================================================
   MEMBUAT DECK
========================================================= */

function createDeck() {
    let selectedQuestions = [];

    if (state.mode === "category") {
        if (state.selectedCategories.length === 0) {
            alert("Pilih minimal satu kategori dulu ya 😄");
            return false;
        }
        selectedQuestions = finalQuestions.filter(q =>
            state.selectedCategories.includes(q.category)
        );
    } else {
        selectedQuestions = [...finalQuestions];
    }

    state.deck = shuffle(selectedQuestions);
    state.history = [];
    state.currentQuestion = null;
    state.seenCount = 0;
    state.currentTurn = "Dennis";
    updateTurn();
    updateProgress();
    return true;
}


/* =========================================================
   MENAMPILKAN PERTANYAAN
========================================================= */

function drawQuestion() {
    if (state.deck.length === 0) {
        showScreen("finish");
        return;
    }

    const question = state.deck.pop();
    state.currentQuestion = question;
    state.history.push(question);
    state.seenCount++;
    renderQuestion(question);
    updateProgress();

    if (state.history.length > 1) {
        toggleTurn();
    }

    updateFavoriteButton();
    loadNoteForCurrentQuestion();
}

function renderQuestion(question) {
    questionContent.innerHTML = `
        <div class="question-content">
            <div class="category-badge">${question.category}</div>
            <div class="question-number">Pertanyaan #${question.id}</div>
            <h2 class="question-text">${question.text}</h2>
        </div>
    `;
}


/* =========================================================
   LEWATI & SEBELUMNYA
========================================================= */

function skipQuestion() {
    if (!state.currentQuestion) {
        drawQuestion();
        return;
    }
    drawQuestion();
}

function showPreviousQuestion() {
    if (state.history.length <= 1) {
        alert("Belum ada pertanyaan sebelumnya 😄");
        return;
    }

    const current = state.history.pop();
    state.deck.push(current);
    const previous = state.history[state.history.length - 1];
    state.currentQuestion = previous;
    state.seenCount--;
    renderQuestion(previous);
    updateProgress();
    toggleTurn();
    updateFavoriteButton();
    loadNoteForCurrentQuestion();
}


/* =========================================================
   FAVORIT
========================================================= */

function isFavorite(questionId) {
    return state.favorites.some(q => q.id === questionId);
}

function toggleFavorite() {
    if (!state.currentQuestion) return;

    const exists = isFavorite(state.currentQuestion.id);
    if (exists) {
        state.favorites = state.favorites.filter(q => q.id !== state.currentQuestion.id);
    } else {
        state.favorites.push(state.currentQuestion);
    }

    updateFavoriteButton();
    renderFavorites();
    saveFavorites();
}

function updateFavoriteButton() {
    if (!state.currentQuestion) {
        favoriteButton.textContent = "⭐ Favorit";
        return;
    }
    favoriteButton.textContent = isFavorite(state.currentQuestion.id) ? "★ Disimpan" : "⭐ Favorit";
}

function renderFavorites() {
    if (state.favorites.length === 0) {
        favoriteList.innerHTML = `
            <div class="empty-card">
                <div class="big-emoji">⭐</div>
                <p>Belum ada pertanyaan favorit.</p>
            </div>
        `;
        return;
    }

    favoriteList.innerHTML = state.favorites.map(q => `
        <article class="favorite-item">
            <div class="favorite-category">${q.category}</div>
            <p class="favorite-text">${q.text}</p>
            <button class="btn btn-small favorite-remove" data-remove-id="${q.id}">Hapus</button>
        </article>
    `).join("");

    document.querySelectorAll("[data-remove-id]").forEach(button => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.removeId);
            state.favorites = state.favorites.filter(q => q.id !== id);
            renderFavorites();
            updateFavoriteButton();
            saveFavorites();
        });
    });
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
}

function loadFavorites() {
    const saved = localStorage.getItem('favorites');
    if (saved) {
        state.favorites = JSON.parse(saved);
        renderFavorites();
        updateFavoriteButton();
    }
}


/* =========================================================
   PROGRESS & MOTIVASI
========================================================= */

function updateProgress() {
    const total = state.mode === "category" ?
        finalQuestions.filter(q => state.selectedCategories.includes(q.category)).length :
        finalQuestions.length;

    const seen = state.seenCount;
    progressText.textContent = `${seen} / ${total} Pertanyaan Terlihat`;
    const percentage = total > 0 ? (seen / total) * 100 : 0;
    progressFill.style.width = `${Math.min(percentage, 100)}%`;
    modeText.textContent = getModeLabel();

    updateProgressMotivation(percentage);
}

function updateProgressMotivation(percentage) {
    const el = document.getElementById('progressMotivation');
    if (!el) return;

    if (percentage === 0) {
        el.textContent = '';
        return;
    }

    const messages = [
        { max: 25, text: '🌱 Mulai pelan-pelan aja' },
        { max: 50, text: '🌿 Udah 25%! Makin kenal, nih!' },
        { max: 75, text: '🌳 Wah, 50%! Kalian mulai cocok?' },
        { max: 90, text: '🔥 75%! Semakin seru!' },
        { max: 99, text: '⚡ 90%! Hampir selesai!' },
        { max: 100, text: '🎉 Selesai! Tapi obrolannya lanjut, kan?' }
    ];

    const found = messages.find(m => percentage <= m.max);
    el.textContent = found ? found.text : '🎉 Selesai!';
}


/* =========================================================
   CATATAN JAWABAN
========================================================= */

function loadNoteForCurrentQuestion() {
    if (!state.currentQuestion) {
        noteArea.style.display = "none";
        return;
    }

    const notes = JSON.parse(localStorage.getItem('notes') || '{}');
    const note = notes[state.currentQuestion.id] || null;

    if (note) {
        noteDennis.value = note.dennis || '';
        noteYohana.value = note.yohana || '';
    } else {
        noteDennis.value = '';
        noteYohana.value = '';
    }
}

function saveNote() {
    if (!state.currentQuestion) {
        alert("Tarik pertanyaan dulu ya!");
        return;
    }

    const notes = JSON.parse(localStorage.getItem('notes') || '{}');
    notes[state.currentQuestion.id] = {
        dennis: noteDennis.value.trim(),
        yohana: noteYohana.value.trim(),
        updatedAt: new Date().toISOString()
    };
    localStorage.setItem('notes', JSON.stringify(notes));
    alert("✅ Catatan berhasil disimpan!");
}

function clearNote() {
    if (!state.currentQuestion) {
        return;
    }
    if (!confirm("Hapus catatan untuk pertanyaan ini?")) return;

    const notes = JSON.parse(localStorage.getItem('notes') || '{}');
    delete notes[state.currentQuestion.id];
    localStorage.setItem('notes', JSON.stringify(notes));
    noteDennis.value = '';
    noteYohana.value = '';
    alert("🗑️ Catatan dihapus.");
}

// Toggle tampilan area catatan
toggleNoteButton.addEventListener('click', function() {
    if (!state.currentQuestion) {
        alert("Tarik pertanyaan dulu ya!");
        return;
    }
    if (noteArea.style.display === 'none') {
        noteArea.style.display = 'block';
        loadNoteForCurrentQuestion();
        this.textContent = '📝 Sembunyikan Catatan';
    } else {
        noteArea.style.display = 'none';
        this.textContent = '📝 Tampilkan Catatan';
    }
});

saveNoteButton.addEventListener('click', saveNote);
clearNoteButton.addEventListener('click', clearNote);


/* =========================================================
   BACKUP (EXPORT & IMPORT)
========================================================= */

function backupData() {
    const data = {
        favorites: state.favorites,
        history: state.history,
        seenCount: state.seenCount,
        currentTurn: state.currentTurn,
        deckIds: state.deck.map(q => q.id),
        historyIds: state.history.map(q => q.id),
        mode: state.mode,
        selectedCategories: state.selectedCategories,
        notes: JSON.parse(localStorage.getItem('notes') || '{}')
    };
    return data;
}

function restoreData(data) {
    state.favorites = data.favorites || [];
    state.history = data.history || [];
    state.seenCount = data.seenCount || 0;
    state.currentTurn = data.currentTurn || "Dennis";

    // Restore deck
    if (data.deckIds && data.historyIds) {
        const allIds = [...data.deckIds, ...data.historyIds];
        const restoredDeck = allIds.map(id => finalQuestions.find(q => q.id === id)).filter(Boolean);
        state.deck = shuffle(restoredDeck);
    }

    // Restore notes
    if (data.notes) {
        localStorage.setItem('notes', JSON.stringify(data.notes));
    }

    updateTurn();
    updateProgress();
    renderFavorites();
    updateFavoriteButton();
    if (state.currentQuestion) {
        loadNoteForCurrentQuestion();
    }
}

document.getElementById('exportData').addEventListener('click', function() {
    const data = backupData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-pertanyaan-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
});

document.getElementById('importData').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(ev) {
            try {
                const data = JSON.parse(ev.target.result);
                restoreData(data);
                alert('✅ Backup berhasil dipulihkan!');
            } catch (err) {
                alert('❌ File tidak valid. Pastikan file backup yang benar.');
            }
        };
        reader.readAsText(file);
    };
    input.click();
});


/* =========================================================
   TOMBOL KEMBALI KE MODE
========================================================= */

if (backToModeButton) {
    backToModeButton.addEventListener('click', function() {
        if (state.seenCount > 0) {
            if (!confirm('Yakin mau kembali ke pilihan mode? Progress pertanyaan akan direset.')) {
                return;
            }
        }

        // Reset state
        state.deck = [];
        state.history = [];
        state.currentQuestion = null;
        state.seenCount = 0;
        state.currentTurn = "Dennis";

        // Reset tampilan
        questionContent.innerHTML = `
            <div class="empty-card">
                <div class="big-emoji">🃏</div>
                <p>Siap? Tarik pertanyaan pertama.</p>
            </div>
        `;
        updateProgress();
        updateTurn();
        updateFavoriteButton();

        // Sembunyikan note area
        noteArea.style.display = 'none';
        toggleNoteButton.textContent = '📝 Tampilkan Catatan';

        // Kembali ke layar mode
        showScreen('mode');
    });
}


/* =========================================================
   EVENT LISTENERS
========================================================= */

startButton.addEventListener("click", () => showScreen("mode"));

playButton.addEventListener("click", () => {
    const isReady = createDeck();
    if (!isReady) return;
    showScreen("game");
    questionContent.innerHTML = `
        <div class="empty-card">
            <div class="big-emoji">🃏</div>
            <p>Siap? Tarik pertanyaan pertama.</p>
        </div>
    `;
    updateFavoriteButton();
    noteArea.style.display = "none";
    toggleNoteButton.textContent = '📝 Tampilkan Catatan';
});

drawButton.addEventListener("click", drawQuestion);
skipButton.addEventListener("click", skipQuestion);
previousButton.addEventListener("click", showPreviousQuestion);
favoriteButton.addEventListener("click", toggleFavorite);
swapTurnButton.addEventListener("click", toggleTurn);

favoritePanelButton.addEventListener("click", () => {
    renderFavorites();
    favoritePanel.classList.add("show");
});

closeFavoritePanel.addEventListener("click", () => {
    favoritePanel.classList.remove("show");
});

favoritePanel.addEventListener("click", event => {
    if (event.target === favoritePanel) {
        favoritePanel.classList.remove("show");
    }
});

restartButton.addEventListener("click", () => {
    state.favorites = [];
    state.selectedCategories = [];
    categoryGrid.querySelectorAll("input").forEach(input => input.checked = false);
    showScreen("mode");
    saveFavorites();
});


/* =========================================================
   INISIALISASI
========================================================= */

renderCategories();
updateTurn();
loadFavorites();
updateProgress();

// Sembunyikan note area di awal
noteArea.style.display = "none";