import bcrypt from "bcrypt";
// const supabase = require("../database/supabase");
import { supabase } from "../database/supabase.js";

const SALT_ROUNDS = 10;

export const sendOTP = async (req, res) => {
    const { email } = req.body;

    // send OTP to email
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) return res.status(401).json({ error: error.message });

    return res.sendStatus(200);
};

export const verifyOTP = async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !token)
        return res.status(400).json({ error: "Missing email or token" });

    const { data, error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: "email",
    });

    if (error) return res.status(401).json({ error: error.message });

    // Set session in cookies for persistence
    res.cookie("supabaseToken", data?.session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // 30 days
    });
};

export const logout = async (req, res) => {
    // Remove session cookie
    res.clearCookie("supabaseToken");
    return res.sendStatus(200);
};

export const register = async (req, res) => {
    const { email, password } = req.body;

    // encrypting password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    // saving user to database
    const { data, error } = await supabase.auth.signUp({
        email,
        password: hashedPassword,
    });

    if (error) return res.status(401).json({ error: error.message });

    return res.sendStatus(200);
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    // authenticate user with email and password
    const { data, error } = await supabase.auth.signInWithPassword({
        email: req.email,
        password: req.password,
    });

    if (error) return res.status(401).json({ error: error.message });

    try {
        const hashedUserID = await bcrypt.hash(userID, SALT_ROUNDS);
    } catch (err) {
        return res.status(401).json(err);
    }
    if (error) return res.status(401).json({ error: error.message });

    // Set HTTP-only cookie for session persistence
    res.cookie("supabaseToken", data?.session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return res.status(200).json({ userID: hashedUserID });
};
