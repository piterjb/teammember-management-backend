"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.updateUser = exports.addUser = exports.getUser = void 0;
const user_1 = __importDefault(require("../models/user"));
//get all users in db
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.status(200).json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Error to find data', error: err });
    }
});
exports.getUser = getUser;
//add new user in db
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, gender, subject, position } = req.body;
    const newUser = new user_1.default({ name, age, gender, subject, position });
    try {
        yield newUser.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json({ message: 'Error to add new user', error: err });
    }
});
exports.addUser = addUser;
//update user in db
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, age, gender, subject, position } = req.body;
    try {
        const updateUser = yield user_1.default.findByIdAndUpdate(id, { name, age, gender, subject, position }, { new: true });
        if (!updateUser) {
            res.status(404).json({ message: 'Not found user' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err });
    }
});
exports.updateUser = updateUser;
//remove user from db
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id, "id");
    try {
        const removeUser = yield user_1.default.findByIdAndDelete(id, { new: true });
        res.status(200).json({ message: 'Success' });
    }
    catch (err) {
        res.status(500).json({ message: 'Error to remove user', error: err });
    }
});
exports.removeUser = removeUser;
