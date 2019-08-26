{% load i18n %}

L.drawLocal.draw.toolbar.actions.title = gettext("Cancel drawing");
L.drawLocal.draw.toolbar.actions.text = gettext("Cancel");
L.drawLocal.draw.toolbar.undo.title = gettext("Delete last point drawn");
L.drawLocal.draw.toolbar.undo.text = gettext("Delete last point");
L.drawLocal.draw.toolbar.buttons.polyline = gettext("Draw a polyline");
L.drawLocal.draw.toolbar.buttons.polygon = gettext("Draw a polygon");
L.drawLocal.draw.toolbar.buttons.rectangle = gettext("Draw a rectangle");
L.drawLocal.draw.toolbar.buttons.circle = gettext("Draw a circle");
L.drawLocal.draw.toolbar.buttons.marker = gettext("Draw a marker");
L.drawLocal.draw.handlers.circle.tooltip.start = gettext("Click and drag to draw circle.");
L.drawLocal.draw.handlers.marker.tooltip.start = gettext("Click map to place marker.");
L.drawLocal.draw.handlers.polygon.tooltip.start = gettext("Click to start drawing shape.");
L.drawLocal.draw.handlers.polygon.tooltip.cont = gettext("Click to continue drawing shape.");
L.drawLocal.draw.handlers.polygon.tooltip.end = gettext("Click first point to close this shape.");
L.drawLocal.draw.handlers.polyline.error = gettext("<strong>Error:</strong> shape edges cannot cross!");
L.drawLocal.draw.handlers.polyline.tooltip.start = gettext("Click to start drawing line.");
L.drawLocal.draw.handlers.polyline.tooltip.cont = gettext("Click to continue drawing line.");
L.drawLocal.draw.handlers.polyline.tooltip.end = gettext("Click last point to finish line.");
L.drawLocal.draw.handlers.rectangle.tooltip.start = gettext("Click and drag to draw rectangle.");
L.drawLocal.draw.handlers.simpleshape.tooltip.end = gettext("Release mouse to finish drawing.");

L.drawLocal.edit.toolbar.actions.save.title = gettext("Save changes.");
L.drawLocal.edit.toolbar.actions.save.text = gettext("Save");
L.drawLocal.edit.toolbar.actions.cancel.title = gettext("Cancel editing, discards all changes.");
L.drawLocal.edit.toolbar.actions.cancel.text = gettext("Cancel");
L.drawLocal.edit.toolbar.buttons.edit = gettext("Edit layers");
L.drawLocal.edit.toolbar.buttons.editDisabled = gettext("No layers to edit.");
L.drawLocal.edit.toolbar.buttons.remove = gettext("Delete layers");
L.drawLocal.edit.toolbar.buttons.removeDisabled = gettext("No layers to delete.");
L.drawLocal.edit.handlers.edit.tooltip.text = gettext("Drag handles, or marker to edit feature.");
L.drawLocal.edit.handlers.edit.tooltip.subtext = gettext("Click cancel to undo changes.");
L.drawLocal.edit.handlers.remove.tooltip.text = gettext("Click on a feature to remove");
