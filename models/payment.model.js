import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true,
        },

        productId: {
            type: Number,
            require: true,
        },

        productName: {
            type: String,
            require: true,
        },

        amount: {
            type: Number,
            require: true,
        },

        reference: {
            type: String,
            require: true,
            unique: true,
        },

        status: {
            type: String,
            email: ["Pending", "Success", "Failed"],
            default: "Pending",
        },
    },
    {timestamps: true },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;