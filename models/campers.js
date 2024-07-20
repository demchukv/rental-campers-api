import mongoose from "mongoose";

const campersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
    },
    location: {
      type: String,
      required: true,
    },
    adults: {
      type: Number,
      required: true,
    },
    children: {
      type: Number,
      required: true,
    },
    engine: {
      type: String,
      required: true,
    },
    transmission: {
      type: String,
      required: true,
    },
    form: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    tank: {
      type: String,
      required: true,
    },
    consumption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    details: {
      airConditioner: {
        type: Number,
        required: true,
      },
      bathroom: {
        type: Number,
        required: true,
      },
      kitchen: {
        type: Number,
        required: true,
      },
      beds: {
        type: Number,
        required: true,
      },
      TV: {
        type: Number,
        required: true,
      },
      CD: {
        type: Number,
        required: true,
      },
      radio: {
        type: Number,
        required: true,
      },
      shower: {
        type: Number,
        required: true,
      },
      toilet: {
        type: Number,
        required: true,
      },
      freezer: {
        type: Number,
        required: true,
      },
      hob: {
        type: Number,
        required: true,
      },
      microwave: {
        type: Number,
        required: true,
      },
      gas: {
        type: String,
        required: true,
      },
      water: {
        type: String,
        required: true,
      },
    },
    gallery: {
      type: Array,
    },
    reviews: [
      {
        reviewer_name: {
          type: String,
          required: true,
        },
        reviewer_rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const CampersModel = mongoose.model("Campers", campersSchema);

export default CampersModel;
