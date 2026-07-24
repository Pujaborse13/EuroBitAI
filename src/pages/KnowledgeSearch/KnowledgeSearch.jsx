import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";  // ✅ fixed import

const KnowledgeSearch = () => {
  const [open, setOpen] = useState(false);
  const [resources, setResources] = useState([]);
  const [formData, setFormData] = useState({ name: "", url: "", type: "" });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!formData.name || !formData.url || !formData.type) return; // simple validation
    setResources([...resources, formData]);
    setFormData({ name: "", url: "", type: "" });
    handleClose();
  };

  const handleDelete = (index) => {
    const updated = [...resources];
    updated.splice(index, 1);
    setResources(updated);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" color="primary" mb={2}>
        Knowledge Sources
      </Typography>

      <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
        Add Resource
      </Button>

      {/* Table of Resources */}
      <Table sx={{ mt: 2 }}>
        <TableHead sx={{ backgroundColor: "#0d47a1" }}>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>URL</TableCell>
            <TableCell sx={{ color: "white" }}>Type</TableCell>
            <TableCell sx={{ color: "white" }} align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resources.map((res, index) => (
            <TableRow key={index}>
              <TableCell>{res.name}</TableCell>
              <TableCell>{res.url}</TableCell>
              <TableCell>{res.type}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" onClick={() => window.open(res.url, "_blank")}>
                  <OpenInNewIcon />
                </IconButton>
                <IconButton color="secondary">
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> {/* ✅ properly closed here */}

      {/* Add Resource Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Resource</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="URL"
            name="url"
            value={formData.url}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Select
            fullWidth
            name="type"
            value={formData.type}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="" disabled>Select Type</MenuItem>
            <MenuItem value="Confluence">Confluence</MenuItem>
            <MenuItem value="Jira">Jira</MenuItem>
            <MenuItem value="RedHat">Red Hat</MenuItem>
            <MenuItem value="GitHub">GitHub</MenuItem>
            <MenuItem value="Internal Wiki">Internal Wiki</MenuItem>
            <MenuItem value="API Docs">API Docs</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default KnowledgeSearch;