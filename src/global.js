'use strict';
    //////////
    //global//
    //////////
    let game, width, height;
    window.devicePixelRatio = 1;
    const canvas = document.getElementById('canvas');
    canvas.width = width = 480;
    canvas.height = height = 640;
    const context = canvas.getContext('2d');
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    const BGIW = 2048;
    const BGIH = 1546;
    const TIW = 128;
    const TIH = 128;
    let t = 0;
    const images = [];
    const tiles = [];
    const enemies = [];
    let imagesCounter = 0;
    const loading = document.getElementById('loading');
    let currentLevelIndex = 0;
    let health = 1E3;
    const imagesQ = sources.length;
    let moving = false;
    const keys = {};
    const gravity = 0.3;
    const friction = 0.6;
    const crystals = [];
    const crystalKeys = { g: false, y: false, b: false };
    const buttons = [];
    let isButtonsOnScreen = true;
    let score = 0;
    let info = false;