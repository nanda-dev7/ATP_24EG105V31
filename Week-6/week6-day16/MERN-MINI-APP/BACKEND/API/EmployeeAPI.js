import exp from "express";
import { Employee } from "../Models/EmployeeModel.js";

export const employeeApp = exp.Router();

// Add employee
employeeApp.post("/", async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();

        res.status(201).json({
            message: "Employee added successfully",
            employee
        });

    } catch (error) {

        if (error.code === 11000) {
            res.status(400).json({
                message: "Email already exists"
            });
        } else {
            res.status(500).json({
                message: "Error adding employee",
                error: error.message
            });
        }
    }
});

// Get all employees
employeeApp.get("/", async (req, res) => {
    try {

        const employees = await Employee.find();

        res.status(200).json(employees);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching employees",
            error: error.message
        });
    }
});

// Get employee by ID
employeeApp.get("/:id", async (req, res) => {
    try {

        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json(employee);

    } catch (error) {

        res.status(500).json({
            message: "Error fetching employee",
            error: error.message
        });
    }
});

// Update employee
employeeApp.put("/:id", async (req, res) => {
    try {

        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee updated successfully",
            employee
        });

    } catch (error) {

        if (error.code === 11000) {
            res.status(400).json({
                message: "Email already exists"
            });
        } else {
            res.status(500).json({
                message: "Error updating employee",
                error: error.message
            });
        }
    }
});

// Delete employee
employeeApp.delete("/:id", async (req, res) => {
    try {

        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Error deleting employee",
            error: error.message
        });
    }
});