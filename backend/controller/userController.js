import axios from "axios";
import bcrypt from "bcrypt";
import { supabase } from "../database/supabase";

const SALT_ROUNDS = 10;

export const register = async (req, res) => {
    const { email, password } = req.body;
    // encrypting password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    // saving user to database
    await supabase.auth
        .signUp({
            email,
            password: hashedPassword,
        })
        .then((data, error) => {
            if (error) return res.status(401).json(error);
            console.log("DATA: ", data);

            return res.status(200).json(data);
        });

    try {
        const hashedUserID = await bcrypt.hash(userID, SALT_ROUNDS);
        return res.status(200).json({ userID, hashedUserID });
    } catch (err) {
        return res.status(401).json(err);
    }
};

export const login = async (req, res) => {
    const { userID } = req.body;

    try {
        const hashedUserID = await bcrypt.hash(userID, SALT_ROUNDS);
        return res.status(200).json({ userID, hashedUserID });
    } catch (err) {
        return res.status(401).json(err);
    }
};
