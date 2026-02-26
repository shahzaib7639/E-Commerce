// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      size,
      bestSeller,
    } = req.body;

    if (!req.files) {
      return res.json({
        success: false,
        message: "No files uploaded",
      });
    }

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    console.log("Body:", req.body);
    console.log("Files:", req.files);

    res.json({
      success: true,
      message: "Images received",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list products
const listProducts = async (req, res) => {};

// function for removing product
const removeProduct = async (req, res) => {};

// function for single product info
const singleProduct = async (req, res) => {};

export { addProduct, listProducts, removeProduct, singleProduct };
